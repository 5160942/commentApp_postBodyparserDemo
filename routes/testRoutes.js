var express = require('express');
var routes = express.Router();
var homeRoutes = require('./homeRoutes')

var app = express();

var names = [];
var currentIndex = 0;
routes.get('/', function(req, res) {
    var profileJSON = homeRoutes.getProfile();
    if(!profileJSON.length) {
        res.redirect('/home');
    } else {
        names.push(profileJSON[currentIndex].name);
        currentIndex++
        res.render('test', {
        names: names
    });
    }
    
});

module.exports = routes;