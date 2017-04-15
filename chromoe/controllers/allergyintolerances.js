var Allergyintolerance = require('../models/allergyintolerance');

//show all allergyintolerances
function indexFunc(req, res, next){
  Allergyintolerance.find({}, function(err, allergyintolerances){
    if (err) throw err;
    res.json({allAllergyintolerances: allergyintolerances});
  }).select('-_v');
}

//create a allergy intolerance
function create(req, res, next){
  var allergyintolerance = new Allergyintolerance();
      allergyintolerance.pid = req.body.pid;
      allergyintolerance.onset = req.body.onset;
      allergyintolerance.substance = req.body.substance;
      allergyintolerance.status = req.body.status;
      allergyintolerance.lastOccurence = req.body.lastOccurence;
      allergyintolerance.numberofOccurences = req.body.numberofOccurences;
      allergyintolerance.reaction = req.body.reaction;
      allergyintolerance.certainty = req.body.certainty;
      allergyintolerance.description = req.body.description;
      allergyintolerance.severity = req.body.severity;
      allergyintolerance.otherAllergies= req.body.otherAllergies;
    allergyintolerance.save(function(err, allergyintolerance) {
      if (err) throw err;
      res.json({newAllergyintolerance: allergyintolerance});
    });
}

//find records with study criteria
function findStud(req, res, next){
  Allergyintolerance.find({"substance":{$eq:req.body.substance},"reaction":{$eq:req.body.reaction},"severity":{$eq:req.body.severity}}, function(err, allergyintolerances){
    if (err) throw (err);
    res.json({criteriaAllergyintolerance: allergyintolerances});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Allergyintolerance.find({"pid":{$eq:req.body.pid}}, function(err, allergyintolerances){
    if (err) throw (err);
    res.json({patientAllergyintolerance: allergyintolerances});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Allergyintolerance.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Allergyintolerance successfully deleted'});
  }).select('-__v');
}


module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
