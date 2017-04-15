var express = require('express');
var router = express.Router();

var studysController = require('../controllers/studys');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', studysController.getAll);
router.get('/:id', studysController.show);
router.post('/', studysController.addOne);
router.put('/', studysController.compare);
router.patch('/:id', studysController.updateStudy);
router.delete('/:id', studysController.destroy);

module.exports = router;
