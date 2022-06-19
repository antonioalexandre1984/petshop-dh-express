const fs = require('fs');
const { v4: geradorDeId } = require('uuid');

//geradorDeId();

function open(){
    let content = fs.readFileSync("./db.json", "utf8")
    const db = JSON.parse(content)
    return db;
} // acesso ao banco de dados

function store(db) {
    content = JSON.stringify(db,null,4);
    fs.writeFileSync("./db.json", content, "utf8")
}

const User = {
    findAll: () => {
        const db = open();
        return db.users;
    },

    findById: (id) => {
        const db = open();
        const user = db.users.find(user => user.id == id);    
        return user;
    },

       findByEmail: (email) => {
        const db = open();
        const user = db.users.find(user => user.email == email);    
        return user;
    },


          save: (user) => {
            const db = open();
            user.id = geradorDeId();
            db.users.push(user);
            store(db);
    },
          
               update: (id,userUpdated) => {
                const db = open();
                const index = db.users.findIndex(user => user.id == id);
                db.users[index] = userUpdated;
                store(db);
                   
    },
               
                delete: (id) => {
                const db = open();
                const index = db.users.findIndex(user => user.id == id);
                db.users.splice(index,1);
                store(db);
    },
}

module.exports = User;