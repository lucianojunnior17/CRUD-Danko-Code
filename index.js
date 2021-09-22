const express = require('express');

const server = express();

server.use(express.json());


const cursos = ['FullStack Master', 'Desenvolvimento de Games','Como vier do YouTube']

// retorono

server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index]);
});

server.get('/cursos', (req, res) => {
    return res.json(cursos);

});

//CRIAR UM NOVO CURSO

server.post('/cursos', (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});

// ATUALIZART CURSOS

server.put('/cursos/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos [index] = name;

    return res.json(cursos);

});

//DELETEAR CURSOS 
server.delete('/cursos/:index', function (req, res) {
    const { index } = req.params

    cursos.splice(index, 1);
    return res.json({Message: ' O curso foi deletado com sucesso'});
});




server.listen(3000);
