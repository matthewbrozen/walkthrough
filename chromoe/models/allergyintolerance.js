var mongoose = require('mongoose');

var allergyintoleranceSchema = mongoose.Schema({
  pid: Number,
  onset: Date,
  substance: String,
  status: String,
  lastOccurence: Date,
  numberofOccurences: Number,
  reaction: String,
  certainty: String,
  description: String,
  severity: String,
  otherAllergies: [String]
});

var Allergyintolerance = mongoose.model("Allergyintolerance", allergyintoleranceSchema);
module.exports = Allergyintolerance;
