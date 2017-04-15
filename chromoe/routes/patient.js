var express = require('express');
var router = express.Router();

var patientsController = require('../controllers/patients')

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', patientsController.getAll);
router.post('/', patientsController.addOne);
router.put('/', patientsController.findStud);
router.patch('/', patientsController.findPatient);
router.delete('/:id', patientsController.destroy);

module.exports = router;
