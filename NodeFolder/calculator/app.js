const express = require('express');
const app = express();
var calcmod = require('./calcmod');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

    res.send(`
    <form action="/result" method="POST">
        <div><strong>Enter two numbers</strong> <br><br>
            <label for="first">First</label><br>
            <input type="text" id="first" name="first" /><br/><br>
            <label for="second">Second</label><br>
            <input type="text" id="seconds" name="second" /><br/><br>
            <label for="">Method:</label><br>
            <select name="method" id="">
                <option value="add" selected>Add</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <input type="submit" value="Click" />
        </div>
    </form>
    `);

});

app.post('/result', (req, res) => {
    calcmod.calc(req, res)
});


app.listen(3000, () => {
    console.log('Your Server is running on 3000');
})