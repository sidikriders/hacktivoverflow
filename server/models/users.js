var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {
      type: String,
      unique: true
    },
    pass: String,
    full_name: String,
    email: {
      type: String,
      unique: true
    }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
