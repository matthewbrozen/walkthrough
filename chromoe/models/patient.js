var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  pid: Number,
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
  patientValue: Number
  });

var Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
