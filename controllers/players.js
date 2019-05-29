const Player = require('../models/player');

module.exports = {
    index,
    new: newPlayer,
    create,
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
    if (err) return res.redirect('/players/new');
    console.log(err);
    // res.redirect('/movies');
    res.redirect('/players')
    // res.redirect(`/players/${player._id}`);
  });
}

function show (req, res) {
  Player.findById(req.params.id, function(err, player) {
    if (err) return res.send(err);
    res.render('players/show', { title: 'Player Profile', player});
    console.log(player.position);
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