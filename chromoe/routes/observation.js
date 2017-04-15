var express = require('express');
var router = express.Router();

var observationsController = require('../controllers/observations');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', observationsController.getAll);
router.post('/', observationsController.addOne);
router.put('/', observationsController.findStud);
router.patch('/', observationsController.findPatient);
router.delete('/:id', observationsController.destroy);

module.exports = router;
