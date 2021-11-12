exports.add = function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<!DOCTYPE html>
    <html>
        <form action="http://localhost:8080/add.js">
        <div>Enter two numbers
            <input type="text" name="first" /><br/>
            <input type="text" name="second" /><br/>
            <input type="submit" value="Click" />
        </div>
        </form>
        </body>
    </html> `);
    return res.end();
};