var Realpatient = require('../models/realpatient');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

//show all realpatients
function indexFunc(req, res, next) {
  Realpatient.find({}, function(err, realpatients) {
    if (err) throw err;
    res.json({allRealpatients: realpatients});
  }).select('-_v');
}

//show one realpatient
function show(req, res, next) {
  var id = req.params.id;
  Realpatient.findOne({_id: id}, function(err, realpatient) {
    if (err) throw err;
    res.json({selectedRealpatient: realpatient});
  });
}

//create a realpatient
function create(req, res, next) {
  Realpatient.findOne({"email":{$eq:req.body.email}}, function(err, realpatient){
      if (err) throw err;

      if(realpatient==null){
        var realpatient = new Realpatient();
            realpatient.email = req.body.email;
            realpatient.password = req.body.password;
            realpatient.active = req.body.active;
            realpatient.firstName = req.body.firstName;
            realpatient.lastName = req.body.lastName;
            realpatient.phone = req.body.phone;
            realpatient.gender = req.body.gender;
            realpatient.birthDate = req.body.birthDate;
            realpatient.address = req.body.address;
            realpatient.zipcode = req.body.zipcode;
            realpatient.married = req.body.married;
            realpatient.numberofChildren = req.body.numberofChildren;
            realpatient.preferredCommunication = req.body.preferredCommunication;
            realpatient.careProvider = req.body.careProvider;
            realpatient.hasGenome = req.body.hasGenome;
            realpatient.hasTracker = req.body.hasTracker;
            realpatient.hasEHR = req.body.hasEHR;
            realpatient.patientValue = req.body.patientValue;
            realpatient.revenue = req.body.revenue;
            realpatient.setting = req.body.setting;
            realpatient.offers = req.body.offers;
        realpatient.save(function(err, realpatient) {
          if (err) throw err;
          res.json({newRealpatient: realpatient});
        });
      }
        else{
          res.json("3");
        }
    })
}

//verify login
function compare(req, res, next) {
  console.log("checking");
  Realpatient.findOne({"email":{$eq:req.body.email}}, function(err, realpatient){
    if (err) throw err;

    var up = req.body.password;

     //if email exists in db
    if(realpatient!=null){

        var hash = realpatient.password;
        //if email exists in db check if password hashes match
        if (bcrypt.compareSync(up, hash)==true){
        //if passwords match send RID
        res.json({"PID":realpatient._id});
      }
        else{
        //if passwords don't match send error code 1
        res.json("1");
      }
    }
    else {
      //if email doesn't exists in db send error code 2
      res.json("2");
    }
  })
}

//update realpatient with offer
function update(req, res) {
  var id = req.params.id;

  Realpatient.findOne({_id:id}, function(err, realpatient) {
    if (err) throw err;
    //can be array or single object
    if(req.body.offers) realpatient.offers = realpatient.offers.concat(req.body.offers);
    realpatient.save(function(err, realpatient) {
      res.json({updatedRealpatient: realpatient});
    });
  });
}

//update realpatient with revenue and if revenue is in offers then remove from offers
function bought(req, res) {
  var id = req.params.id;

  Realpatient.findOne({_id:id}, function(err, realpatient) {
    if (err) throw err;
    //can only be a object to remove from offers
    if(req.body.revenue) realpatient.revenue = realpatient.revenue.concat(req.body.revenue);

    Array.prototype.remove = function (v) {
        if (this.indexOf(v) != -1) {
            this.splice(this.indexOf(v), 1);
            return true;
        }
        return false;
    }
    //only works if req.body.revenue is object, doesn't remove if req.body.revenue is array
    realpatient.offers.remove(req.body.revenue);

    realpatient.save(function(err, realpatient) {
      res.json({updatedRealpatient: realpatient});
    });
  });
}

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Realpatient.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Realpatient successfully deleted'});
  }).select('-__v');
}



module.exports = {
  getAll: indexFunc,
  show:show,
  addOne: create,
  compare: compare,
  update: update,
  bought: bought,
  destroy: destroy
}
