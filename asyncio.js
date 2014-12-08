var fs = require('fs');
var myNumber = undefined;

function addOne(callback) {
	fs.readFile('number.txt', function doneReading(err,fileContents) {
		if (err) return console.log("Can't open number.txt");
		myNumber = parseInt(fileContents);
		myNumber++;
		callback();
	});
}

function logMyNumber() {
	console.log(myNumber);
}

addOne(logMyNumber);
