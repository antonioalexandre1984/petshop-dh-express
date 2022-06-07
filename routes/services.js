const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/adm/services',serviceController.index); 

router.get('/adm/services/register',serviceController.create); 

router.get('/adm/services/:id', serviceController.show);

router.get('/adm/services/:id/edit', serviceController.edit);

router.post('/adm/services', serviceController.store);

router.put('/adm/services/:id',serviceController.update);

router.delete('/adm/services/:id', serviceController.destroy);

module.exports = router;