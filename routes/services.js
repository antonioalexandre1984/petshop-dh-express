const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Lista de serviços')
})

router.get('/servicos', (req, res) => {
    res.send('Detalhes do serviços')
})

router.get('/servicos/:id', (req, res) => {
    res.send('Detalhes dos pets: ' + req.params.id)

})

router.post('/servicos', (req, res) => {
    res.send('Cadastro de pet')
    
})

router.put('/servicos/:id', (req, res) => {
    res.send('Atualização de pet' + req.params.id)
    
})

router.delete('/pets/:id', (req, res) => {
    res.send('Exclusão de pet')
    
})
module.exports = router;