var express = require('express');
var router = express.Router();

var immunizationsController = require('../controllers/immunizations');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', immunizationsController.getAll);
router.post('/', immunizationsController.addOne);
router.put('/', immunizationsController.findStud);
router.patch('/', immunizationsController.findPatient);
router.delete('/:id', immunizationsController.destroy);

module.exports = router;
