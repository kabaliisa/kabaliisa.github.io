var express = require('express');
var app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug')
var questions = ["3,1,4,1,5", "1,1,2,3,5", "1,4,9,16,25", "2,3,5,7,11", "1,2,4,8,16"];
var answers = [9, 8, 36, 13, 32];
var index = 0;
let score = 0;

app.get('/', function(req, res) {
    if (index < 5)
        res.render('sample', { score: score, number: questions[index] });
    else
        res.render('final', { score: score })
});

app.post('/result', function(req, res) {
    const guessedNum = parseInt(req.body.guessedNumber);
    const answer = parseInt(answers[index]);
    index++;
    if (guessedNum == answer) {
        score++;
    }
    res.redirect('/');
});

var server = app.listen(3000, function() {
    console.log('Node server is running..');
});