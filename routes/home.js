const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userValidator = require('../middlewares/userValidator');
const checkLogged = require('../middlewares/checkLogged');

router.get("/",homeController.index)
router.get("/upon", homeController.upon)
router.get("/services", homeController.services)
router.get("/login", homeController.login)
router.post("/login", homeController.postLogin)
router.get("/contact", homeController.contact)
router.get("/register",homeController.create)
router.post("/register", userValidator, homeController.store)
router.get("/adm", checkLogged,homeController.showAdm)
router.get("/logout",homeController.logout);

module.exports = router;