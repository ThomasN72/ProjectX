const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const db = require("./models");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// API routes
app.use(routes);



// Set up promises with mongoose
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb://heroku_lkxldss7:a16oev3efogqsamras216lfrr0@ds149309.mlab.com:49309/heroku_lkxldss7";

// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/oneappDB"
);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
})