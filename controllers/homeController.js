const homeController = {
    index: (req, res) => {
        const title = 'Minha primeira aplicação com ejs;'
        res.render('home', {title});
    }
}

module.exports = homeController;
