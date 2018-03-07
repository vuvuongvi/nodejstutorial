const express = require('express')
var app = express()
var cookieParser = require('cookie-parser');

var apiController = require("./controllers/apiController")
var homeController = require("./controllers/homeController")


app.use("/asset", express.static(__dirname + "/public"));
app.use(cookieParser());
app.set("view engine", "ejs");



//custom middware

app.use("/", function (req, res, next) {
    console.log("Request URl: ", req.url)

    req.requestTime = new Date();
    next();
});

apiController(app);
homeController(app);

app.get("/user/:id", function (req, res) {
    res.render("user", { ID: req.param.id, queryString: req.query.qstr });
});




app.listen(3000, () => console.log('Example app listening on port 3000!'))