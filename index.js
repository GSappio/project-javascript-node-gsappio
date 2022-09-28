const express = require('express');

let app = express();

app.get('/', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Ola</h1>');

});

app.get('/users', (req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users:[{
            name: 'Gabriel Sappio',
            email: 'gabriel.sappio@gmail.com',
            id: 1
        }]
    });

});

app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando tudo OK!");

});