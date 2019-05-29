var mongoose = require ('mongoose');

var playerSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    nickname: String,
    number: Number,
    isPlayer : Boolean,
    position: {type: String, enum: ["P", "C", "1B", "2B", "3B", "SS", "LF", "LCF", "RCF", "RF"]},
    bt: String,
    dob: Date,
    email: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Player', playerSchema);