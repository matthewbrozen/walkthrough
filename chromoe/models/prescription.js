var mongoose = require('mongoose');

var prescriptionSchema = mongoose.Schema({
  pid: Number,
  isBrand: Boolean,
  manufacturer: String,
  product: String,
  form: String,
  ingredient: String,
  dose: Number,
  batch: Number,
  lotNumber: String,
  expirationDate: Date,
  package: String,
  content: String,
  amount: String,
  dateAsserted: Date,
  status: String,
  reasonforuseReference: String,
  effectivedateTime: Date,
  effectivePeriod: String,
  note: String,
  supportingInformation: String,
  medicationReference: String,
  quantitysimpleQuantity: String,
  quantityRange: String,
  rateRatio: String,
  rateRange: String,
  maxdoseperPeriod: String,
  dateWritten: Date,
  dateEnded: Date,
  reasonEnded: String,
  prescriber: String,
  encounter: String,
  dosageInstruction: String,
  asneededBoolean: Boolean,
  numberofrepeatsAllowed: String,
  quantity: String,
  expectedsupplyDuration: String,
  substitution: String,
  reason: String,
  priorPrescription: String
  });

var Prescription = mongoose.model("Prescription", prescriptionSchema);
module.exports = Prescription;
