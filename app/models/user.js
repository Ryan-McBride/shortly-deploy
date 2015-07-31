var db = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}}, //unique
  password: {type: String, required: true}
});

var User = mongoose.mode('User', userSchema);

User.comparePassword = function(attemptedP, savedP, callback) {
  bcrypt.compare(attemptedP, savedP, function(err, isMatch) {
    if(err)return callback(err);
    callback(null, isMatch);
  });
}

userSchema.pre('save', function(next){
  var cipher = bluebird.promisify(bcrypt.hash);
  return cipher(this.password, null, null).bind(this)
    .then(function(hash){
      this.password = hash;
      next();
    });
});

module.exports = User;

