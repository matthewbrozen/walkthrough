var express = require('express');
var router = express.Router();

var realpatientsController = require('../controllers/realpatients');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', realpatientsController.getAll);
router.get('/:id', realpatientsController.show);
router.post('/', realpatientsController.addOne);
router.put('/', realpatientsController.compare);
router.patch('/:id', realpatientsController.update);
router.put('/:id', realpatientsController.bought);
router.delete('/:id', realpatientsController.destroy);

module.exports = router;
