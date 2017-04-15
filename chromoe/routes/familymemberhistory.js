var express = require('express');
var router = express.Router();

var familymemberhistorysController = require('../controllers/familymemberhistorys');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/', familymemberhistorysController.getAll);
router.post('/', familymemberhistorysController.addOne);
router.put('/', familymemberhistorysController.findStud);
router.patch('/', familymemberhistorysController.findPatient);
router.delete('/:id', familymemberhistorysController.destroy);

module.exports = router;
