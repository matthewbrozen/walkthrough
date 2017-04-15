var mongoose = require('mongoose');

var dispenseSchema = mongoose.Schema({
  pid: Number,
  drugId: String,
  status: String,
  practitioner: String,
  product: String,
  reasonGiven: String,
  effectivetimeDate: Date,
  effectivetimePeriod: String,
  note: String,
  dosage: String,
  method: String,
  quantity: String,
  dateWritten: Date,
  reasonEnded: String,
  dosageInstruction: String,
  asneededBoolean: Boolean,
  doseRange: String,
  rateRatio: String,
  rateRange: String,
  maxdoseperPeriod: String,
  dispenseRequest: String,
  validityPeriod: String ,
  numberofrepeatsAllowed: String,
  expectedsupplyDuration: String,
  substitution: String,
  reason: String,
  priorPrescription: String
});

var Dispense = mongoose.model("Dispense", dispenseSchema);
module.exports = Dispense;
