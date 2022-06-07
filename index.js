const express = require('express');
const methodOverride = require('method-override');
const app = express();
const homeRouter = require('./routes/home');
const petsRouter = require('./routes/pets');
const servicesRouter = require('./routes/services');
const requisicoesLog = require('./middlewares/requisicoesLog');
const userValidator = require('./middlewares/userValidator');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
//app.set('views','./telas');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(requisicoesLog);
app.use(userValidator);

app.use(homeRouter);
app.use(petsRouter);
app.use(servicesRouter);

app.use((req, res, next) => {
    return res.status(404).render('errors', { error: 'Pagina não encontrada', img:"https://digitea.es/wp-content/uploads/2015/04/404digitea.gif" });
});



app.listen(3000,()=>console.log('Rodando...'))