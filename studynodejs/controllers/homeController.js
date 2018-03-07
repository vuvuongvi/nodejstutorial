var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render("index");
    });

    app.post("/login", urlencodedParser, function (req, res) {
        res.send("Welcome, " + req.body.username);
        console.log(req.body.username);
        console.log(req.body.password);
    });

    app.post("/login", jsonParser, function (req, res) {
        res.send("Ok");
        console.log(req.body.firstName);
        console.log(req.body.lastName);
    })
}