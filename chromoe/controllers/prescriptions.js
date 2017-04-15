var Prescription = require('../models/prescription');

//show all prescriptions
function indexFunc(req, res, next) {
  Prescription.find({}, function(err, prescriptions) {
    if (err) throw err;
    res.json({allPrescriptions: prescriptions});
  }).select('-_v');
}

//create a prescription
function create(req, res, next) {
  var prescription = new Prescription();
      prescription.pid = req.body.pid;
      prescription.isBrand = req.body.isBrand;
      prescription.manufacturer = req.body.manufacturer;
      prescription.product = req.body.product;
      prescription.form = req.body.form;
      prescription.ingredient = req.body.ingredient;
      prescription.dose = req.body.dose;
      prescription.batch = req.body.batch;
      prescription.lotNumber = req.body.lotNumber;
      prescription.expirationDate = req.body.expirationDate;
      prescription.package = req.body.package;
      prescription.content = req.body.content;
      prescription.amount = req.body.amount;
      prescription.dateAsserted = req.body.dateAsserted;
      prescription.status = req.body.status;
      prescription.reasonforuseReference = req.body.reasonforuseReference;
      prescription.effectivedateTime = req.body.effectivedateTime;
      prescription.effectivePeriod = req.body.effectivePeriod;
      prescription.note = req.body.note;
      prescription.supportingInformation = req.body.supportingInformation;
      prescription.medicationReference = req.body.medicationReference;
      prescription.quantitysimpleQuantity = req.body.quantitysimpleQuantity;
      prescription.quantityRange = req.body.quantityRange;
      prescription.rateRatio = req.body.rateRatio;
      prescription.rateRange = req.body.rateRange;
      prescription.maxdoseperPeriod = req.body.maxdoseperPeriod;
      prescription.dateWritten = req.body.dateWritten;
      prescription.dateEnded = req.body.dateEnded;
      prescription.reasonEnded = req.body.reasonEnded;
      prescription.prescriber = req.body.prescriber;
      prescription.encounter = req.body.encounter;
      prescription.dosageInstruction = req.body.dosageInstruction;
      prescription.asneededBoolean = req.body.asneededBoolean;
      prescription.numberofrepeatsAllowed = req.body.numberofrepeatsAllowed;
      prescription.quantity = req.body.quantity;
      prescription.expectedsupplyDuration = req.body.expectedsupplyDuration;
      prescription.substitution = req.body.substitution;
      prescription.reason = req.body.reason;
      prescription.priorPrescription = req.body.priorPrescription;
  prescription.save(function(err, prescription) {
    if (err) throw err;
    res.json({newPrescription: prescription});
  });
}

//find records with study criteria
function findStud(req, res, next){
  Prescription.find({"product":{$eq:req.body.product}}, function(err, prescriptions){
    if (err) throw (err);
    res.json({criteriaPrescriptions: prescriptions});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Prescription.find({"pid":{$eq:req.body.pid}}, function(err, prescriptions){
    if (err) throw (err);
    res.json({patientPrescriptions: prescriptions});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Prescription.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Prescription successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
