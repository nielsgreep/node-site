// require our dependencies

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;

// route our app
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded());

var router = require('./app/routes');
app.use('/', router);



// start the server

app.listen(port, function(){
    console.log("app started");
})

// set static files (css and images)

app.use(express.static(__dirname + '/public'));
