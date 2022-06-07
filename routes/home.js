const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const requisicoesLog = require('../middlewares/requisicoesLog');
const userValidator = require('../middlewares/userValidator');


router.get("/", requisicoesLog,homeController.index)
router.get("/upon", homeController.upon)
router.get("/services", homeController.services)
router.get("/login", homeController.login)
router.get("/contact", homeController.contact)
router.get("/registrar",homeController.create)
router.post("/registrar",userValidator,homeController.store)

module.exports = router;