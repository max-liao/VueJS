const PORT = process.env.PORT || 8080;

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const router = express.Router();
const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));  

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/jsoon
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

// Express Routes
// const routes = require('./public/routes/');
// (0, _routes.default)(app);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});