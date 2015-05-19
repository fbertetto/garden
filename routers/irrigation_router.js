var express = require('express');
var router = express.Router(); 
var irrigationController = require('../controllers/irrigation_controller')

//create a irrigation
router.post('/', irrigationController.createIrrigation);

//update a irrigation
router.put('/:irrigation_id', irrigationController.updateIrrigation);
    
//retrieve one irrigation
router.get('/:irrigation_id', irrigationController.getIrrigation);

//delete a irrigation
router.delete('/:irrigation_id', irrigationController.deleteIrrigation);

//get all irrigations
router.get('/', irrigationController.getAll);

module.exports = router;



