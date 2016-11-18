var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var server = http.createServer();
server.on('request', function (req, res) {
    var json_data_string = fs.readFileSync("data/dummy.json", 'utf8'); //synchronous file read
    var json_data_object = JSON.parse(json_data_string);
    fs.readFile("views/index.ejs", 'utf8', function (err, contents) {
        if (err) {
            console.log(err);
            res.writeHead(500, {
                'Content-Type': 'text/html'
            });
            res.write("UH OH :(((((");
            res.end();
        }
        else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            var html = ejs.render(contents, {
                data: json_data_object
            });
            res.write(html); //writes a dynamically-generated response body
            res.end();
        }
    }); //asynchronous file-read callback
}); //on request callback
server.listen(4000);