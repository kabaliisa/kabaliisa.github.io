let express = require('express');
let app = express();
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug')
let questions = ["3,1,4,1,5", "1,1,2,3,5", "1,4,9,16,25", "2,3,5,7,11", "1,2,4,8,16"];
let answers = [9, 8, 36, 13, 32];
let index = 0;
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

let server = app.listen(3000, function() {
    console.log('Node server is running..');
});