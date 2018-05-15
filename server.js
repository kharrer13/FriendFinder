// npm packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Configure the Express application
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "./app/public")));

// middleware
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

app.listen(PORT, function() {
  console.log("Dog Friend Finder is listening on PORT: " + PORT);
});
