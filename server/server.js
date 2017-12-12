var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo v1.0.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
        name: 'Daniel',
        age: 39
    }, {
        name: 'Ze',
        age: 30
    }, {
        name: 'Jen',
        age: 26
    }]);
});

app.listen(3000);
module.exports.app = app;
