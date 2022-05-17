const express = require('express');
const router = express.Router();
const petsController = require('../controllers/petsController');


router.get('/pets', petsController.index);

router.get('/pets/:id', petsController.create);

module.exports = router;