const express = require('express')
const router = express.Router()
const path = require("path");

// middleware that is specific to this router
router.use(function Middleware(req, res, next) {
  // console.log('Time: ', Date.now())
  next();
})

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