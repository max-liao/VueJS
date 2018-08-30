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

router.get('/about', function (req, res) {
  res.send('About Vue');
})

router.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, "../home.html"));
})

router.get('/vuex', function (req, res) {
  res.sendFile(path.join(__dirname, "../vuex.html"));
})

router.get('/classStyle', function (req, res) {
  res.sendFile(path.join(__dirname, "../ClassStyle.html"));
})

module.exports = router;