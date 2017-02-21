// require express

var express = require('express');
var path = require('path');

// create our router object

var router = express.Router();


// route for our homepage

router.get('/', function(req,res){
    res.render('pages/index')

})

// route for our about page

router.get('/about', function(req,res){
    res.render('pages/about')

})

router.get('/contact', function(req,res){
  res.render('pages/contact')
});
router.post('/contact', function(req,res){
  
});

// export our router

module.exports = router;
