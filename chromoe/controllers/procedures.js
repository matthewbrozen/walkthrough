var Procedure = require('../models/procedure');


//show all procedures
function indexFunc(req, res, next) {
  Procedure.find({}, function(err, procedures) {
    if (err) throw err;
    res.json({allProcedures: procedures});
  }).select('-_v');
}


//create a procedure
function create(req, res, next) {
  var procedure = new Procedure();
      procedure.pid = req.body.pid;
      procedure.status = req.body.status;
      procedure.category = req.body.category;
      procedure.encounter = req.body.encounter;
      procedure.effectivedateTime = req.body.effectivedateTime;
      procedure.effectivePeriod = req.body.effectivePeriod;
      procedure.issued = req.body.issued;
      procedure.performer = req.body.performer;
      procedure.valueQuantity = req.body.valueQuantity;
      procedure.valueRange = req.body.valueRange;
      procedure.valueRatio = req.body.valueRatio;
      procedure.valueTime = req.body.valueTime;
      procedure.comments = req.body.comments;
      procedure.bodySite = req.body.bodySite;
      procedure.specimen = req.body.specimen;
      procedure.device = req.body.device;
      procedure.referenceRange = req.body.referenceRange;
  procedure.save(function(err, procedure) {
    if (err) throw err;
    res.json({newProcedure: procedure});
  });
}

//find records with study criteria
function findStud(req, res, next){
  Procedure.find({"category":{$eq:req.body.category}}, function(err, procedures){
    if (err) throw (err);
    res.json({criteriaProcedures: procedures});
  })
}

//find all of one patients records
function findPatient(req, res, next){
  Procedure.find({"pid":{$eq:req.body.pid}}, function(err, procedures){
    if (err) throw (err);
    res.json({patientProcedures: procedures});
  })
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Procedure.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Procedure successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  addOne: create,
  findStud: findStud,
  findPatient: findPatient,
  destroy: destroy
}
