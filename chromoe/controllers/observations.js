var Observation = require('../models/observation');


//show all Observation
function indexFunc(req, res, next) {
  Observation.find({}, function(err, observations) {
    if (err) throw err;
    res.json({allObservations: observations});
  }).select('-_v');
}


//create a Observation
function create(req, res, next) {
  var observation = new Observation();
      observation.pid = req.body.pid;
      observation.category = req.body.category;
      observation.systolicbloodPressure = req.body.systolicbloodPressure;
      observation.diastolicbloodPressure = req.body.diastolicbloodPressure;
      observation.isSmoker = req.body.isSmoker;
  observation.save(function(err, observation) {
    if (err) throw err;
    res.json({newObservation: observation});
  });
}

//find all records with study criteria
function findStud(req, res, next){
  Observation.find({"category":{$eq:req.body.category}}, function(err, observations){
    if (err) throw (err);
    res.json({criteriaObservations: observations});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Observation.find({"pid":{$eq:req.body.pid}}, function(err, observations){
    if (err) throw (err);
    res.json({patientObservations: observations});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Observation.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Observation successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
