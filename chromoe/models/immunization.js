var mongoose = require('mongoose');

var immunizationSchema = mongoose.Schema({
  pid: Number,
  status: String,
  date: Date,
  vaccineCode: String,
  reported: Boolean,
  performer: String,
  requester: String,
  category: String,
  manufacturer: String,
  lotNumber: String,
  expirationDate: Date,
  site: String,
  doseQuantity: String,
  note: String,
  reaction: String,
  vaccinationProtocol: String,
  description: String,
  authority: String,
  series: String,
  seriesDoses: String,
  targetDisease: String,
  doseStatus: String,
  dosestatusReason: String
});

var Immunization = mongoose.model("Immunization", immunizationSchema);
module.exports = Immunization;
