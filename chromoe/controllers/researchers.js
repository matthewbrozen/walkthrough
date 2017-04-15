var Researcher = require('../models/researcher');
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;


//show all researchers
function indexFunc(req, res, next) {
  Researcher.find({}, function(err, researchers) {
    if (err) throw err;
    res.json({allResearchers: researchers});
  }).select('-_v');
}

//show one researchers
function show(req, res, next) {
  var id = req.params.id;
  Researcher.findOne({_id: id}, function(err, researcher) {
    if (err) throw err;
    res.json({selectedResearcher: researcher});
  });
}

//create a reseracher
function create(req, res, next) {
  Researcher.findOne({"email":{$eq:req.body.email}}, function(err, researcher){
      if (err) throw err;

      if(researcher==null){
          var researcher = new Researcher();
              researcher.email = req.body.email;
              researcher.password = req.body.password;
              researcher.company = req.body.company;
          researcher.save(function(err, researcher) {
            if (err) throw err;
            res.json({newResearcher: researcher});
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
  Researcher.findOne({"email":{$eq:req.body.email}}, function(err, researcher){
    if (err) throw err;

    var up = req.body.password;

     //if email exists in db
    if(researcher!=null){

        var hash = researcher.password;
        //if email exists in db check if password hashes match
        if (bcrypt.compareSync(up, hash)==true){
        //if passwords match send RID
        res.json({"RID":researcher._id});
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

// delete a record
function destroy(req, res) {
  var id = req.params.id;

  Researcher.remove({_id: id}, function(err) {
    if(err) throw err;
    res.json({message: 'Researcher successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: indexFunc,
  show:show,
  addOne: create,
  compare: compare,
  destroy: destroy
}
