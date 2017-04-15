var Immunization = require('../models/immunization');


//show all immunizations
function indexFunc(req, res, next) {
  Immunization.find({}, function(err, immunizations) {
    if (err) throw err;
    res.json({allImmunizations: immunizations});
  }).select('-_v');
}


//create a immunization
function create(req, res, next) {
  var immunization = new Immunization();
      immunization.pid = req.body.pid;
      immunization.status = req.body.status;
      immunization.date = req.body.date;
      immunization.vaccineCode = req.body.vaccineCode;
      immunization.reported = req.body.reported
      immunization.performer = req.body.performer;
      immunization.requester = req.body.requester;
      immunization.category = req.body.category;
      immunization.manufacturer = req.body.manufacturer;
      immunization.lotNumber = req.body.lotNumber;
      immunization.expirationDate = req.body.expirationDate;
      immunization.site = req.body.site;
      immunization.doseQuantity = req.body.doseQuantity;
      immunization.note = req.body.note;
      immunization.reaction = req.body.reaction;
      immunization.vaccinationProtocol = req.body.vaccinationProtocol;
      immunization.doseSequence = req.body.doseSequence;
      immunization.description = req.body.description;
      immunization.authority = req.body.authority;
      immunization.series = req.body.series;
      immunization.seriesDoses = req.body.seriesDoses;
      immunization.targetDisease = req.body.targetDisease;
      immunization.doseStatus = req.body.doseStatus;
      immunization.dosestatusReason = req.body.dosestatusReason;
  immunization.save(function(err, immunization) {
    if (err) throw err;
    res.json({newImmunization: immunization});
  });
}

//find all records with study criteria
function findStud(req, res, next){
  Immunization.find({"category":{$eq:req.body.category}}, function(err, immunizations){
    if (err) throw (err);
    res.json({criteriaImmunizations: immunizations});
  })
}
//find all of one patients records
function findPatient(req, res, next){
  Immunization.find({"pid":{$eq:req.body.pid}}, function(err, immunizations){
    if (err) throw (err);
    res.json({patientImmunizations: immunizations});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Immunization.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Immunization successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
