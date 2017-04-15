var mongoose = require('mongoose');

var observationSchema = mongoose.Schema({
  pid: Number,
  category: String,
  systolicbloodPressure: Number,
  diastolicbloodPressure: Number,
  isSmoker: String
});

var Observation = mongoose.model("Observation", observationSchema);
module.exports = Observation;
