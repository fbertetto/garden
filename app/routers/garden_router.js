var express = require('express');
var router = express.Router(); 
var gardenController = require('../controllers/garden_controller')

//create a garden
router.post('/', gardenController.createGarden);

//update a garden
router.put('/:garden_id', gardenController.updateGarden);
    
//retrieve one garden
router.get('/:garden_id', gardenController.getGarden);

//delete a garden
router.delete('/:garden_id', gardenController.deleteGarden);

//get all gardens
router.get('/', gardenController.getAll);

module.exports = router;