var fs = require('fs');


var buffer = fs.readFileSync(process.argv[2]);

var stringArray = buffer.toString().split('\n');
var l=0


console.log(stringArray.length-1);
