var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {

  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    response.end(data);
  });
}).listen(8080);