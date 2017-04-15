var Familymemberhistory = require('../models/familymemberhistory');


//show all family member historys
function indexFunc(req, res, next) {
  Familymemberhistory.find({}, function(err, familymemberhistorys) {
    if (err) throw err;
    res.json({allFamilymemberhistorys: familymemberhistorys});
  }).select('-_v');
}


//create a family member history
function create(req, res, next) {
  var familymemberhistory = new Familymemberhistory();
      familymemberhistory.pid = req.body.pid;
      familymemberhistory.status = req.body.status;
      familymemberhistory.relationship = req.body.relationship;
      familymemberhistory.bornDate = req.body.bornDate;
      familymemberhistory.deceased = req.body.deceased;
      familymemberhistory.deceasedAge = req.body.deceasedAge;
      familymemberhistory.condition = req.body.condition;
      familymemberhistory.outcome = req.body.outcome;
      familymemberhistory.onsetAge = req.body.onsetAge;
      familymemberhistory.onsetRange = req.body.onsetRange;
      familymemberhistory.onsetPeriod = req.body.onsetPeriod;
  familymemberhistory.save(function(err, familymemberhistory) {
    if (err) throw err;
    res.json({newFamilymemberhistory: familymemberhistory});
  });
}

//find all records with study criteria
function findStud(req, res, next){
  Familymemberhistory.find({"relationship":{$eq:req.body.relationship},"deceased":{$eq:req.body.deceased},"condition":{$eq:req.body.condition}}, function(err, familymemberhistorys){
    if (err) throw (err);
    res.json({criteriaFamilymemberhistorys: familymemberhistorys});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Familymemberhistory.find({"pid":{$eq:req.body.pid}}, function(err, familymemberhistorys){
    if (err) throw (err);
    res.json({patientFamilymemberhistorys: familymemberhistorys});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Familymemberhistory.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Familymemberhistory successfully deleted'});
  }).select('-__v');
}


module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
