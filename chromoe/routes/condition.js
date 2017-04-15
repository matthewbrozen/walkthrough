var express = require('express');
var router = express.Router();

var conditionsController = require('../controllers/conditions');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', conditionsController.getAll);
router.post('/', conditionsController.addOne);
router.put('/', conditionsController.findStud);
router.patch('/', conditionsController.findPatient);
router.delete('/:id', conditionsController.destroy);

module.exports = router;
