const Player = require('../models/player');

module.exports = {
    createPosition
}

function createPosition(req, res) {
    Player.findById(req.params.id, function(err, player) {
        player.position.push(req.body);
        player.save(function(err) {
            res.redirect(`/players/${player._id}`)
        })
    })
}