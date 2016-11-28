/*
To do list:
-comment up code to make it easier to read (javascript)
-save answers to localstorage or json
-???
-Profit
*/

//var summary = require("./summary");


var express = require('express'),
app = express(),
http = require('http'),
server = http.createServer(app),
fs = require('fs'),
ejs = require('ejs'),
PORT =80;

var json_data_string = fs.readFileSync("data/concussiontracker.json", 'utf8');

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.get('/', function(req, res){
        res.locals.data = JSON.parse(json_data_string);
        res.render('index.ejs');
});

app.get('/summary', function(req, res){
        res.locals.data = JSON.parse(json_data_string);
        res.render('summary.ejs');
});
app.listen(PORT);

console.log("Server working");
