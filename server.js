'use strict';
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var GoogleStrategy = require('passport-google-auth').OAuth2Strategy;

var app = express();

app.use(session({ secret: 'SOMETHINGSUPERSECRET' }));

app.get('/', function(req, res, next) {
});

app.get('/authenticate', function(req, res, next) {
  res.send('<p>HELLLO</p>');       
});

app.get('/authenticate/callback');

app.get('/display', function(req, res) {
  if (req.user) {
    res.send('You are ' + req.user.display + ' , and I claim my $1 million');
  } else {
    res.redirect('/authenticate');
  }
});
