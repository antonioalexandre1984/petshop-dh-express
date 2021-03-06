const Pet = require('../models/pet');
const storage = require('../config/storage');
const fs = require('fs');

const uploadPet = storage('avatarPet', '/pets');

const petController = {

    index: (req, res) => {
        const pets = Pet.findAll();
         return res.render('adm/pets', {pets})
    },

    
    show: (req, res) => {
        const { id } = req.params
        const pet = Pet.findById(id);
    
        return res.render('adm/pets/details',{pet})
    },

    create: (req, res) => {
        return res.render('adm/pets/register');
    },

    store: (req, res) => {	
        uploadPet(req, res, (err) => {
            const { name, specie } = req.body;
            const pet = {
                image: '/img/pets/' + req.file.filename,
                name,
                specie,
            };
            Pet.save(pet);
            return res.redirect('/adm/pets');
        })
    },

     edit: (req, res) => {
        const { id } = req.params;
        const pet = Pet.findById(id)
       return res.render('adm/pets/edit',{pet});
    },

    update: (req, res) => {
        const {id} =req.params
        const { image,name,specie } = req.body
        const pet = {
            id,
            image,
            name,
            specie,
        };
            Pet.update(id,pet)
            return res.redirect('/adm/pets');
    },

    destroy: (req, res) => {
        const { id } = req.params;
        Pet.delete(id);
        return res.redirect('/adm/pets');
    },
   
}
    module.exports = petController;
