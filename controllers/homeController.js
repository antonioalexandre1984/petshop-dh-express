const Service = require('../models/service');
const User = require('../models/user');
const { validationResult } = require('express-validator');

const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs;'
        res.render('home',{title});
    },

    upon: (req, res) => {
        res.render('home/upon');
    },
    services: (req, res) => {
        const services = Service.findAll();
        res.render('home/services',{services})
    },
    login: (req, res) => {
        res.send('home/Login');
    },  
    contact: (req, res) => {
        res.send('home/contact');
    },      

     create: (req, res) => {
        res.render('home/registro');
    },

    store: (req, res) => {	
        let errors = validationResult(req);
        console.log(errors);

        if (errors.isEmpty) {
            const { name, email, senha } = req.body
            const user = {
                name,
                email,
                senha
            };
            User.save(user)
            return res.redirect('/');
        }
       res.render('home/registro',{listoferros:erros.erros}) 
    },

}

module.exports = homeController;
