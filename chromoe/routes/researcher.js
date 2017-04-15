var express = require('express');
var router = express.Router();

var researchersController = require('../controllers/researchers');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', researchersController.getAll);
router.get('/:id', researchersController.show);
router.post('/', researchersController.addOne);
router.put('/', researchersController.compare);
router.delete('/:id', researchersController.destroy);

module.exports = router;
