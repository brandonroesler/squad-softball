const Player = require('../models/player');

module.exports = {
    index,
    new: newPlayer,
    create,
    createPosition,
    show,
    delPlayer
};

function index(req, res) {
    Player.find({}, function(err, players) {
      res.render('players/index', { title: 'All Players', players});
    });
}

function newPlayer(req, res) {
  res.render('players/new', { title: 'Add Player'});
}


function create (req, res) {
  var player = new Player(req.body);
  player.save(function(err) {
    console.log(err);
    if (err) return res.redirect('/players/new');
    // res.redirect('/movies');
    res.redirect('/players')
    // res.redirect(`/players/${player._id}`);
  });
}

//Code from Chris
function createPosition(req, res){
  let name = req.player.name
  Player.findOne({name: name})
  .then(person=>{
    let port = person.portfolio.id(req.params.id)
    res.render('players/:id', {
      title: 'Portfolios',
      user: req.user,
      port
    })
  })
}

function show (req, res) {
  Player.findById(req.params.id, function(err, player) {
    if (err) return res.send(err);
    res.render('players/show', { title: 'Player Profile', player});
  })
};

function delPlayer(req, res) {
  Player.findByIdAndDelete(req.params.id, function(err, player) {
    player.save(function(err) {
      if(err) return res.redirect('/players');
      res.redirect('/players')
    })
  })
}

// function delPlayer(req, res, next) {
//   req.user.players.splice(req.params.id, 1);
//   req.user.save(function(err) {
//     res.redirect('/');
//   });
// }