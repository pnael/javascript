var myModule = require("./mod-dirext.js");


var dir = process.argv[2];
var extension = process.argv[3];
myModule(dir,extension,printResult);

function printResult(err, data) {
	if (err) return console.log("Error :",err);
	for(var i=0;i < data.length;i++) {
		console.log(data[i]);
	}
}
