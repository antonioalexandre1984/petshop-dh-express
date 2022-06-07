const Service = require('../models/service');

const serviceController = {
    
    index: (req, res) => {
        const services = Service.findAll();
        return res.render('adm/services',{services})
    },

    show: (req, res) => {
        const { id } = req.params;
        const service = Service.findById(id);
        if (!service) {
       return res.status(404).render('errors', { error: 'Serviço não encontrado', img:"https://digitea.es/wp-content/uploads/2015/04/404digitea.gif" });
}
        return res.render('adm/services/details',{service})
    },

    create: (req, res) => {
        return res.render('adm/services/register');
    },

    store: (req, res) => {	
        const { name,image,price,active,description } = req.body
        const service = {
            name,
            image,
            price,
            active: (active ? true : false),
            description,
        };
            Service.save(service)
            return res.redirect('/adm/services');
    },

    edit: (req, res) => {
        const { id } = req.params;
        const service = Service.findById(id)
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
        Service.delete(id);
        return res.redirect('/adm/services');
    }
}
module.exports = serviceController;