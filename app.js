var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var homeRoutes = require('./routes/homeRoutes')
var testRoutes = require('./routes/testRoutes')

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use('/home', homeRoutes);
app.use('/test', testRoutes);

app.listen(3000, function() {
    console.log("3000 listening");
});