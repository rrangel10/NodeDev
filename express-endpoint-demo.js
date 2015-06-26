var express = require('express');
var app = express();
var fs = require('fs');

app.use('/message', function (req, res) {
   
    
    res.send('running response');
});

app.use('/users', function (req, res) {
fs.readFile('./data1.json', 'utf-8', function(err, data) {
    res.send(data);
});
});

app.listen(3000);