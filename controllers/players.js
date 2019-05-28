const Player = require('../models/player');

module.exports = {
    index,
    new: newPlayer
};

function index(req, res) {
    Player.find({}, function(err, players) {
      res.render('players/index', { title: 'All Players', players});
    });
}

function newPlayer(req, res) {
  res.render('players/new', { title: 'Add Player'});
}