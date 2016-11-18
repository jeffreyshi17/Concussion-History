var express = require('express'),
app = express(),
http = require('http'),
server = http.createServer(app),
fs = require('fs'),
ejs = require('ejs');

var json_data_string = fs.readFileSync("data/concussiontracker.json", 'utf8');
var PORT = 8080; 

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.get('/', function(req, res){
        res.locals.data = JSON.parse(json_data_string);
        res.render('index.ejs');
});

app.listen(PORT);
console.log("Server working");

/*var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var express = require('express');
var app = express();
var server = http.createServer();
server.on('request', function (req, res) {

    var json_data_string = fs.readFileSync("data/concussiontracker.json", 'utf8'); //synchronous file read
    var jsonObject = JSON.parse(json_data_string);
    fs.readFile("views/index.ejs", 'utf8', function (err, contents) {
        if (err) {
            console.log(err);
            res.writeHead(500, {
                'Content-Type': 'text/html'
            });
            res.write("UH OH :(((((");
            res.end();
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            var html = ejs.render(contents, {
                data: jsonObject
            });
            res.write(html); //writes a dynamically-generated response body
            res.end();
        }
    }); //asynchronous file-read callback
});
server.listen(4000);*/