var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = "."+process.argv[3];

fs.readdir(directory, function doneReading(err,buffer){
	for(var i=0;i<buffer.length;i++) {
		if(path.extname(buffer[i])==extension) {
			console.log(buffer[i]);
		};
	};

});

