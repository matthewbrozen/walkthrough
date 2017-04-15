var mongoose = require('mongoose');

var studySchema = mongoose.Schema({
  rid: String,
  description: String,
  studyName: String,
  areaofResearch: String,
  budget: Number,
  allergyCriteria: [{
    substance: String,
    reaction: String,
    severity: String
  }],
  prescriptionCriteria: [{
    product: String,
    doseMin: String,
    doseMax: String,
    quantityMin: String,
    quantityMax: String
  }],
  observationCriteria: [{
    category: String,
    systolicbloodPressure: Number,
    diastolicbloodPressure: Number,
    isSmoker: String
  }],
  conditionCriteria: [{
    category: String,
    severity: String,
    stage: String
  }],
  procedureCriteria: [{
    category: String,
    dateStart: Date,
    dateEnd: Date
  }],
  immunizationCriteria: [{
    category: String,
    dateStart: Date,
    dateEnd: Date
  }],
  familymemberhistoryCriteria: [{
    relationship: String,
    deceased: Boolean,
    condition: String
  }],
  dispenseCriteria: [{
    product: String,
    quantityMin: String,
    quantityMax: String,
    daysStart: String,
    daysEnd: String
  }],
  patientCriteria: [{
    gender: String,
    ageStart: Number,
    ageEnd : Number,
    zipcode: Number,
    radius: Number
  }],
  pidsBought: [Number],
  pidsAvailable: [Number]
  });

var Study = mongoose.model("Study", studySchema);
module.exports = Study;
