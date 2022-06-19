const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const checkLogged = require('../middlewares/checkLogged');

router.use(checkLogged);

router.get('/adm/pets',petController.index);

router.get('/adm/pets/register',petController.create);

router.get('/adm/pets/:id',petController.show);

router.get('/adm/pets/:id/edit',petController.edit);

router.post('/adm/pets',petController.store);

router.put('/adm/pets/:id',petController.update);

router.delete('/adm/pets/:id',petController.destroy);

module.exports = router;