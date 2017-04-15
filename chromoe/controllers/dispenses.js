var Dispense = require('../models/dispense');


//show all dispenses
function indexFunc(req, res, next) {
  Dispense.find({}, function(err, dispenses) {
    if (err) throw err;
    res.json({allDispenses: dispenses});
  }).select('-_v');
}


//create a dispense
function create(req, res, next) {
  var dispense = new Dispense();
      dispense.pid = req.body.pid;
      dispense.drugId = req.body.drugId;
      dispense.status = req.body.status;
      dispense.practitioner = req.body.practitioner;
      dispense.product = req.body.product;
      dispense.reasonGiven = req.body.reasonGiven;
      dispense.effectivetimeDate = req.body.effectivetimeDate;
      dispense.effectivetimePeriod = req.body.effectivetimePeriod;
      dispense.note = req.body.note;
      dispense.dosage = req.body.dosage;
      dispense.method = req.body.method;
      dispense.quantity = req.body.quantity;
      dispense.dateWritten = req.body.dateWritten;
      dispense.reasonEnded = req.body.reasonEnded;
      dispense.dosageInstruction = req.body.dosageInstruction;
      dispense.asneededBoolean = req.body.asneededBoolean;
      dispense.doseRange = req.body.doseRange;
      dispense.rateRatio = req.body.rateRatio;
      dispense.rateRange = req.body.rateRange;
      dispense.maxdoseperPeriod = req.body.maxdoseperPeriod;
      dispense.dispenseRequest = req.body.dispenseRequest;
      dispense.validityPeriod = req.body.validityPeriod;
      dispense.numberofrepeatsAllowed = req.body.numberofrepeatsAllowed;
      dispense.expectedsupplyDuration = req.body.expectedsupplyDuration;
      dispense.substitution = req.body.substitution;
      dispense.reason = req.body.reason;
      dispense.priorPrescription = req.body.priorPrescription;
  dispense.save(function(err, dispense) {
    if (err) throw err;
    res.json({newDispense: dispense});
  });
}

//find all records with study criteria
function findStud(req, res, next){
  Dispense.find({"product":{$eq:req.body.product}}, function(err, dispenses){
    if (err) throw (err);
    res.json({criteriaDispenses: dispenses});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Dispense.find({"pid":{$eq:req.body.pid}}, function(err, dispenses){
    if (err) throw (err);
    res.json({patientDispenses: dispenses});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Dispense.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Dispense successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
