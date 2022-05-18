const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de serviços')
})

router.get('/services', (req, res) => {
    res.send('Detalhes do serviços')
})

router.get('/services/:id', (req, res) => {
    res.send('Detalhes dos pets: ' + req.params.id)

})

router.post('/services', (req, res) => {
    res.send('Cadastro de pet')
    
})

router.put('/services/:id', (req, res) => {
    res.send('Atualização de pet' + req.params.id)
    
})

router.delete('/pets/:id', (req, res) => {
    res.send('Exclusão de pet')
    
})
module.exports = router;