var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var realpatientSchema = mongoose.Schema({
  email: String,
  password: String,
  active: Boolean,
  firstName: String,
  lastName: String,
  phone: String,
  gender: String,
  birthDate: Date,
  address: String,
  zipcode: Number,
  married: Boolean,
  numberofChildren: Number,
  preferredCommunication: String,
  careProvider: String,
  hasGenome: Boolean,
  hasTracker:Boolean,
  hasEHR:Boolean,
  patientValue: Number,
  //don't store with object id or else you need to know _id to update
  revenue: [{amount:Number, company:String, studyid:String, _id : false }],
  setting: String,
  //don't store with object id or else you need to know _id to update
  offers:[{amount:Number, company:String, studyid:String, _id : false }]
  });

  //presave method for hashing
    realpatientSchema.pre('save', function(next) {
      var realpatient = this;

      // only hash the password if it has been modified (or is new)
      if (!realpatient.isModified('password')) return next();

      // generate a salt
      bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
          if (err) return next(err);

          // hash the password using our new salt
          bcrypt.hash(realpatient.password, salt, function(err, hash) {
              if (err) return next(err);

              // override the cleartext password with the hashed one
              realpatient.password = hash;
              next();
          });
      });
  });


  //post save for returning hash and hash method
  realpatientSchema.methods.comparePassword = function(candidatePassword, cb) {
      bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
          if (err) return cb(err);
          cb(null, isMatch);
      });
  };

var Realpatient = mongoose.model("Realpatient", realpatientSchema);
module.exports = Realpatient;
