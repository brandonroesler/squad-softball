var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
    googleName: String,
    email: String,
    avatar: String,
    googleId: String
  }, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);