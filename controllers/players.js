const Player = require('../models/player');

module.exports = {
    index,
    new: newPlayer,
    create
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
    // res.redirect('/movies');
    res.redirect(`/players/${player._id}`);
  });
}