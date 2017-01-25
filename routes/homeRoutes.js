var express = require('express');
var routes = express.Router();

var app = express();

var profile = [];

routes.get('/', function(req, res) {
    res.render('index', {
        profile : profile
    });;
});

routes.get('/new-entry', function(req, res, next) {
    res.render('new-entry')
});

routes.post('/new-entry', function(req, res, next) {
    var name = req.body.name;
    var comment = req.body.comment;
    var date = new Date();
    profile.push({name, comment, date});
    res.redirect('/home');
});

module.exports = routes;
module.exports.getProfile = function() {
    return profile;
};