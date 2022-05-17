const petsController = {

    index: (req, res) => {
        res.send('Lista de pets');
    },

    create: (req, res) => {
        res.send('Cadastro de pets');
    },

    show: (req, res) => {
        res.send('Olá Mundo!4');
    },

    update: (req, res) => {
        res.send('Olá Mundo!5');
    },

    destroy: (req, res) => {
        res.send('Olá Mundo!6');
    },
}
    module.exports = petsController;
