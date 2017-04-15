var Condition = require('../models/condition');


//show all conditions
function indexFunc(req, res, next) {
  Condition.find({}, function(err, conditions) {
    if (err) throw err;
    res.json({allConditions: conditions});
  }).select('-_v');
}


//create a condition
function create(req, res, next) {
  var condition = new Condition();
      condition.pid = req.body.pid;
      condition.name = req.body.name;
      condition.encounter = req.body.encounter;
      condition.asserter = req.body.asserter;
      condition.dateRecorded = req.body.dateRecorded;
      condition.clinicalStatus = req.body.clinicalStatus;
      condition.severity = req.body.severity;
      condition.onsetPeriod = req.body.onsetPeriod;
      condition.stage = req.body.stage;
      condition.assessment = req.body.assessment;
      condition.evidence = req.body.evidence;
      condition.notes = req.body.notes;
  condition.save(function(err, condition) {
    if (err) throw err;
    res.json({newCondition: condition});
  });
}

//find all records with study criteria
function findStud(req, res, next){
  Condition.find({"name":{$eq:req.body.name},"severity":{$eq:req.body.severity},"stage":{$eq:req.body.stage}}, function(err, conditions){
    if (err) throw (err);
    res.json({criteriaConditions: conditions});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Condition.find({"pid":{$eq:req.body.pid}}, function(err, conditions){
    if (err) throw (err);
    res.json({patientConditions: conditions});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Condition.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Condition successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
