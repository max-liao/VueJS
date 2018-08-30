const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Serve static content for the app from the "public" directory
app.use(express.static("./public"));  
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Express Routes
const routes = require('./public/routes/router');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});