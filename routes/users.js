const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();


router.get('/register', function(req, res) {
    res.render('front/register', { });
});

router.get('/magazareg', function(req, res) {
  res.render('front/magazareg', { });
});

router.post('/register', function(req, res) {
    User.register(new User({ username: req.body.username}),
    req.body.password, function(err, user) {
   	 if (err) {
   		 return res.render('front/register', { user: user });
   	 }
   	 
   	 passport.authenticate('local')(req,res, function() {
   		 res.redirect('/');
   	 });
    });
});

router.get('/login',function(req, res) {
    res.render('front/login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req,res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;