var fs = require('fs');
var path = require('path');


module.exports = function(directory, extension, callback) {
	fs.readdir(directory, function doneReading(err,buffer){
		if (err) return callback(err);
		extension = "."+extension;
		var data = buffer.filter(extensionOk);

		function extensionOk(filename) {
			return path.extname(filename)===extension;
		};
		callback(null,data);
	});
}

