const express = require('express');
const app = express();
const petsRouter = require('./routes/pets');
const servicesRouter = require('./routes/services');
const homeRouter = require('./routes/home');
const methodOverride = require('method-override');
const requisicoesLog = require('./middlewares/requisicoesLog');
const session = require('express-session');

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "minha primeira session",
    resave: false,
    saveUninitialized: false,
}));

app.use(requisicoesLog);

app.use(homeRouter);
app.use(petsRouter);
app.use(servicesRouter);


app.use((req, res, next) => {
    return res.status(404).render('errors', { error: 'Pagina não encontrada', img:"https://digitea.es/wp-content/uploads/2015/04/404digitea.gif" });
});

app.listen(3000,()=>console.log('Rodando...'))