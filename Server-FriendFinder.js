// npm packages we need
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Variables so we can use separate routing files
var apiRoutes = require("./Routing/apiRoute");
var htmlRoutes = require("./Routing/htmlRoute");

// Creating our HTTP server
var app = express();

// Setting the initial PORT
var PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Making JQuery advailable fo use
app.use(express.static(path.join(__dirname, '/Public')));

// Setting our ROUTES
// Getting the HTML Routes with the htmlRoutes.js file
htmlRoutes(app);
// Getting the Api Routes with the apiRoutes.js file
apiRoutes(app);

// Starting our server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});