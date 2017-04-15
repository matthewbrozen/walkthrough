var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var researcherSchema = mongoose.Schema({
  email: String,
  password: String,
  company: String
});

//presave method for hashing
  researcherSchema.pre('save', function(next) {
    var researcher = this;

    // only hash the password if it has been modified (or is new)
    if (!researcher.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(researcher.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            researcher.password = hash;
            next();
        });
    });
});


//post save for returning hash and hash method
researcherSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


var Researcher = mongoose.model("Researcher", researcherSchema);

module.exports = Researcher;
