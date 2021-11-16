var express = require('express');
var app = express();
app.use(express.static('static'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const url = require('url');
const querystring = require('querystring');
var wordMod = require('./word');

var fs = require('fs');

app.get('/', function(req, res) {
    fs.readFile('dict.html', function(err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end()
    })
});

app.post('/', function(req, res) {
    wordMod.word(req, res);
});

let server = app.listen(3000, function() {
    console.log('Server is running..');
});