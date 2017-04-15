var Patient = require('../models/patient');


//show all patients
function indexFunc(req, res, next) {
  Patient.find({}, function(err, patients) {
    if (err) throw err;
    res.json({allPatients: patients});
  }).select('-_v');
}


  //create a patient
  function create(req, res, next) {
    var patient = new Patient();
        patient.pid = req.body.pid;
        patient.active = req.body.active;
        patient.firstName = req.body.firstName;
        patient.lastName = req.body.lastName;
        patient.phone = req.body.phone;
        patient.gender = req.body.gender;
        patient.birthDate = req.body.birthDate;
        patient.address = req.body.address;
        patient.zipcode = req.body.zipcode;
        patient.married = req.body.married;
        patient.numberofChildren = req.body.numberofChildren;
        patient.preferredCommunication = req.body.preferredCommunication;
        patient.careProvider = req.body.careProvider;
        patient.hasGenome = req.body.hasGenome;
        patient.hasTracker = req.body.hasTracker;
        patient.hasEHR = req.body.hasEHR;
        patient.patientValue = req.body.patientValue;
    patient.save(function(err, patient) {
      if (err) throw err;
      res.json({newPatient: patient});
    });
  }

//find all records with study criteria
function findStud(req, res, next){
  Patient.find({"gender":{$eq:req.body.gender}}, function(err, patients){
    if (err) throw (err);
    res.json({criteriaPatients: patients});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Patient.find({"pid":{$eq:req.body.pid}}, function(err, patient){
    if (err) throw (err);
    res.json({onePatient: patient});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Patient.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Patient successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
