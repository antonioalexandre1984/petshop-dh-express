const Service = require('../models/service');
const User = require('../models/user');
const {validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs;'
        return res.render('home',{title});
    },
    showAdm: (req, res) => {       
        const { email, password } = req.body;
        const {id } = req.params;
        const user = User.findById(id);
    
        
        return res.render('adm/');
    },

    postLogin: (req, res) => {
      const { email,password } = req.body;
        const user = User.findByEmail(email);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.render("home/login", { error: 'Email ou senha incorreto ou não existe' });
        }
        req.session.user = user;
      
        return res.redirect("/adm");
    },

    upon: (req, res) => {
        res.render('home/upon');
    },

    services: (req, res) => {
        const services = Service.findAll();
        return res.render('home/services',{services})
    },
     login: (req, res) => {
        return res.render('home/login');
    },
    contact: (req, res) => {
        return res.render('home/contact');
    },      

    create: (req, res) => {
        return res.render('home/register');
    },

    store: (req, res) => {	
        let errors = validationResult(req);

        const passwordCrypto = bcrypt.hashSync(req.body.password, 10);

        if (errors.isEmpty()) {
            const {name, email} = req.body
            const user = {
                name,
                email,
                password:passwordCrypto 
            };
            User.save(user)
            return res.redirect('/adm');
        }
       return res.render('home/register',{listOfErros:errors.errors,old:req.body}) 
    },

    
    logout: (req, res) => {
        req.session.destroy(function(err) {console.log(err)});
        res.redirect("/login");
    }

}

module.exports = homeController;
