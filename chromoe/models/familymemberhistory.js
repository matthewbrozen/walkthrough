var mongoose = require('mongoose');

var familymemberhistorySchema = mongoose.Schema({
  pid: Number,
  status: String,
  relationship: String,
  bornDate: Date,
  deceased: String,
  deceasedAge: String,
  condition: String,
  outcome: String,
  onsetAge: String,
  onsetRange: String,
  onsetPeriod: String
});

var Familymemberhistory = mongoose.model("Familymemberhistory", familymemberhistorySchema);
module.exports = Familymemberhistory;
