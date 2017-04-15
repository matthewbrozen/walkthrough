var mongoose = require('mongoose');

var procedureSchema = mongoose.Schema({
  pid: Number,
  status: String,
  category: String,
  encounter: String,
  effectivedateTime: Date,
  effectivePeriod: String,
  issued: Date,
  performer: String,
  valueQuantity: String,
  valueRange: String,
  valueRatio: String,
  valueTime: String,
  comments: String,
  bodySite: String,
  specimen: String,
  device: String,
  referenceRange: String
});

var Procedure = mongoose.model("Procedure", procedureSchema);
module.exports = Procedure;
