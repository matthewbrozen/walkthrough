var express = require('express');
var router = express.Router();

var proceduresController = require('../controllers/procedures');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', proceduresController.getAll);
router.post('/', proceduresController.addOne);
router.put('/', proceduresController.findStud);
router.patch('/', proceduresController.findPatient);
router.delete('/:id', proceduresController.destroy);

module.exports = router;
