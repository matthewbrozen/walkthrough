var express = require('express');
var router = express.Router();

var dispensesController = require('../controllers/dispenses');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', dispensesController.getAll);
router.post('/', dispensesController.addOne);
router.put('/', dispensesController.findStud);
router.patch('/', dispensesController.findPatient);
router.delete('/:id', dispensesController.destroy);

module.exports = router;
