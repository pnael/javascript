var http = require('http');
var fs = require('fs');

var port = 8124;

var counter = 0;
//write out numbers
function writeNumbers(res) {

	//increment global, write to client
	for  (var i = 0; i < 100; i++) {
		counter++;
		res.write(counter.toString() + '\n');
	}
}

var server = http.createServer(function (req, res) {
      // request handling logic...
      var query = require('url').parse(req.url).query;
      var app = require('querystring').parse(query).file + ".txt";

      //Content Header
      res.writeHead(200, {'Content-Type': 'text/plain'});

      //write out numbers
      writeNumbers(res);

      //time to open file andread contents
      setTimeout(function() {
	      console.log('Opening ' + app);
	      //Open and read in file contents
	      fs.readFile(app, 'utf8', function(err,data) {
		if (err)
			res.write('Could not find or open file for reading : '+app+'\n');
	      	else {
			res.write(data);
		}
	      // response is done
	      	res.end()
		});
      }, 2000);
});

server.listen(port);
console.log('HTTP server listening on port ', port);

