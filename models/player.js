var mongoose = require ('mongoose');

var playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    nickname: String,
    number: Number,
    isPlayer : Boolean,
    position: {type: String, enum: ["P", "C", "1B", "2B", "3B", "SS", "LF", "LCF", "RCF", "RF"]},
    bats: String,
    throws: String,
    dob: Date
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Player', playerSchema);