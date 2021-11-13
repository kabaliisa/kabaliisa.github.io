exports.calc = function(req, res) {
    let method = req.body.method;
    let answer = calculate(req, method);


    res.send(`<!DOCTYPE html>
    <html>
        <head><meta charset=\"utf-8\"/>
        <title>Calculator Web Site</title>
        </head>
        <body>
        <p>The Answer is: ${answer}</p>
        <a href="/">Another Calculation</a>
        </body>
    </html> `);
};

function calculate(req, val) {
    let result;
    if (val === 'add') {
        result = parseInt(req.body.first) + parseInt(req.body.second);
    } else if (val === 'multiply') {
        result = parseInt(req.body.first) * parseInt(req.body.second);
    } else if (val === 'divide') {
        result = parseInt(req.body.first) / parseInt(req.body.second);
    }

    return result
}