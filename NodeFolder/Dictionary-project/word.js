var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "solo",
    password: "password123",
    database: "entries"
});

exports.word = function(req, res) {
    con.query('SELECT definition FROM entries where word =' + mysql.escape(req.body.word), function(err, result) {
        res.send(result);
    });
}