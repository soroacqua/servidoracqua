var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/rest_test');


var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use('/api',require('./routes/api'));

app.listen(3000);
console.log('api na porta 3000');
