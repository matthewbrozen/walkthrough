var mongoose = require('mongoose');

var conditionSchema = mongoose.Schema({
  pid: Number,
  name: String,
  encounter: String,
  asserter: String,
  dateRecorded: Date,
  clinicalStatus: String,
  severity: String,
  onsetPeriod: String,
  stage: String,
  assessment: String,
  evidence: String,
  notes: String
});

var Condition = mongoose.model("Condition", conditionSchema);
module.exports = Condition;
