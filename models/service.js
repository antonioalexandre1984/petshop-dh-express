const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

//geradorDeId();

function open(){
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content)
    return db;
}

function store(db) {
    content = JSON.stringify(db,null,4);
    fs.writeFileSync("./db.json", content, "utf8")
}

const Service = {
    findAll: () => {
        const db = open();
        return db.services;
    },

    findById: (id) => {
        const db = open();
        const service = db.services.find(service => service.id == id);    
        return service;
    },

          save: (service) => {
            const db = open();
            service.id = geradorDeId();
            db.services.push(service);
            store(db);
    },
          
               update: (id,serviceUpdated) => {
                const db = open();
                const index = db.services.findIndex(service => service.id == id);
                db.services[index] = serviceUpdated;
                store(db);
                   
    },
               
                delete: (id) => {
                const db = open();
                const index = db.services.findIndex(service => service.id == id);
                db.services.splice(index,1);
                store(db);
    },
}

module.exports = Service;