var Study = require('../models/study');


//show all Studys
function indexFunc(req, res, next) {
  Study.find({}, function(err, studys) {
    if (err) throw err;
    res.json({allStudys: studys});
  }).select('-_v');
}

//show one Study
function show(req, res, next) {
  var id = req.params.id;
  Study.findOne({_id:id}, function(err, study) {
    if (err) throw err;
    res.json({selectedStudy: study});
  }).select('-_v');
}

//create a Study
function create(req, res, next) {
  var study = new Study();
      study.rid = req.body.rid;
      study.description = req.body.description;
      study.studyName = req.body.studyName;
      study.areaofResearch = req.body.areaofResearch;
      study.budget = req.body.budget;
      study.allergyCriteria = req.body.allergyCriteria;
      study.prescriptionCriteria = req.body.prescriptionCriteria;
      study.observationCriteria = req.body.observationCriteria;
      study.conditionCriteria = req.body.conditionCriteria;
      study.procedureCriteria = req.body.procedureCriteria;
      study.immunizationCriteria = req.body.immunizationCriteria;
      study.familymemberhistoryCriteria = req.body.familymemberhistoryCriteria;
      study.dispenseCriteria = req.body.dispenseCriteria;
      study.patientCriteria = req.body.patientCriteria;
      study.pidsBought = req.body.pidsBought;
      study.pidsAvailable = req.body.pidsAvailable;
  study.save(function(err, study) {
    if (err) throw err;
    res.json({newStudy: study});
  });
}

//associate researcher with study
function compare(req, res, next) {
  console.log("finding studies");
    Study.find({"rid":{$eq:req.body.rid}}, function(err, studys){
      if (err) throw (err);
      res.json({researcherStudys: studys})
  })
}

//update study with accepted patients
function updateStudy(req, res) {
  var id = req.params.id;

  Study.findOne({_id:id}, function(err, study) {
    if (err) throw err;
      if(req.body.pidsBought)
        study.pidsBought = study.pidsBought.concat(req.body.pidsBought);
        study.pidsAvailable = study.pidsAvailable.filter(function(x) { return req.body.pidsBought.indexOf(x) < 0 });

    study.save(function(err, study) {
      res.json({updatedStudy: study});
    });
  });
}

// delete a study
function destroy(req, res) {
  var id = req.params.id;
  Study.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Study successfully deleted'});
  }).select('-__v');
}


module.exports = {
  getAll: indexFunc,
  show: show,
  addOne: create,
  compare: compare,
  updateStudy: updateStudy,
  destroy: destroy
}
