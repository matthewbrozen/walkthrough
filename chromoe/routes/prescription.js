var express = require('express');
var router = express.Router();

var prescriptionsController = require('../controllers/prescriptions');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', prescriptionsController.getAll);
router.post('/', prescriptionsController.addOne);
router.put('/', prescriptionsController.findStud);
router.patch('/', prescriptionsController.findPatient);
router.delete('/:id', prescriptionsController.destroy);

module.exports = router;
