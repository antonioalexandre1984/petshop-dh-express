const Service = require('../models/service');
const storage = require('../config/storage');
const fs = require('fs');



const uploadAvatar = storage('avatar','/services')

const serviceController = {
    
    index: (req, res) => {
        const services = Service.findAll();
        return res.render('adm/services',{services})
    },

    show: (req, res) => {
        const { id } = req.params;
        const service = Service.findById(id);
        return res.render('adm/services/details',{service})
    },

    create: (req, res) => {
        return res.render('adm/services/register');
    },

    store: (req, res) => {	
        uploadAvatar(req, res, (err) => {   
        const { name,price,active,description } = req.body
        const service = {
            name,
            image: '/img/services/' + req.file.filename,
            price,
            active: (active == "on" ? true : false),
            description,
        };
            Service.save(service)
         
        })
         return res.redirect('/adm/services'); 
    },
        
    edit: (req, res) => {
        const { id } = req.params;
        const service = Service.findById(id)
        if (!service) {
           return res.status(404).render('errors', { error: 'Serviço não encontrado', img:"https://digitea."})
       }
        return res.render('adm/services/edit', { service });
        
    },
    
    update: (req, res) => {
        const {id} =req.params
        const { name,image,price,description,active } = req.body
        const service = {
            id,
            name,
            image,
            price,
            description,
            active: (active ? true : false)
        };
            Service.update(id,service)
            return res.redirect('/adm/services');
    },

    destroy: (req, res) => {
        const { id } = req.params;
        const service = Service.findById(id);

        if (!service) {
            return res.status(404).render('errors', { error: 'Serviço não encontrado', img:"https://digitea.es/wp-content/uploads/2015/04/404digitea.gif" });
        }
         
        Service.delete(id);
        try {
        fs.unlinkSync('./public' + service.image)    
            }catch(err){
            console.log(err)
        }
        fs.unlinkSync('./public' + service.image)
        return res.redirect('/adm/services');
    },

}
module.exports = serviceController;