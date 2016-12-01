var express = require('express'),
app = express(),
http = require('http'),
server = http.createServer(app),
fs = require('fs'),
ejs = require('ejs'),
port = process.env.PORT || 3000;

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
app.listen(port);

console.log("Server working");
