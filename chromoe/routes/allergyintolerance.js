var express = require('express');
var router = express.Router();

var allergyintolerancesController = require('../controllers/allergyintolerances');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', allergyintolerancesController.getAll);
router.post('/', allergyintolerancesController.addOne);
router.put('/', allergyintolerancesController.findStud);
router.patch('/', allergyintolerancesController.findPatient);
router.delete('/:id', allergyintolerancesController.destroy);

module.exports = router;
