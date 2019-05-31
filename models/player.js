var mongoose = require ('mongoose');

var positionSchema = new mongoose.Schema({
  // position: {type: String, enum: ["P", "C", "1B", "2B", "3B", "SS", "LF", "LCF", "RCF", "RF"]}
  position: String
})

var playerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    nickname: String,
    number: Number,
    isPlayer : Boolean,
    position: [positionSchema],
    bats: String,
    throws: String,
    homeState: String,
    dob: Object
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Player', playerSchema);