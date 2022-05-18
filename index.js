const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const petsRouter = require('./routes/pets');
const servicesRouter = require('./routes/services');

app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views','./telas');

app.use(homeRouter);
app.use(petsRouter);
app.use(servicesRouter);



app.listen(3000,()=>console.log('Rodando...'))