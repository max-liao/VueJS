const express = require('express')
const router = express.Router()
const path = require("path");

// define the home page route
router.get('/', function (req, res, next) {
  console.log("Home Page Accessed");
  next();
});

router.get('/instance', (req, res) => {
  res.sendFile(path.join(__dirname, "../instance.html"));
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About Vue');
})

module.exports = router;