var http = require('http');
var fs = require('fs');


var port = process.argv[2];
var filename = process.argv[3];

var server = http.createServer(function (req, res) {
      // request handling logic...

	var readStream = fs.createReadStream(filename);

	readStream.on('open', function() {
		readStream.pipe(res);
		console.log("Opening", filename);
	})

	readStream.on('error', function(err) {
		res.end(err);
		console.log("Error", filename);
	})	
});
server.listen(port);
console.log('HTTP server learning on port ', port);

