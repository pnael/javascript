var fs = require('fs');
var stringArray = undefined;

fs.readFile(process.argv[2], function doneReading(err,buffer){
	stringArray = buffer.toString().split('\n');
	console.log(stringArray.length-1);
});

