var http = require("http");
var bl = require("bl");

var reponse=[];
var k=0;
var i=0


function getHttp(i, url) {
	var req = http.get(url, function(res) {
		res.pipe(bl(function(err,data) {
			if (err) 
				return console.error(err);
			data = data.toString();
			reponse[i]=data;
			k++;
			if(k==3) {
				console.log(reponse[0]);
				console.log(reponse[1]);
				console.log(reponse[2]);
			}
		}));
	req.on('error', function(e) {
		console.log('problem with the request: '+ e.message);
		});
	});
}

for(i=0;i<3;i++) {
	var url = process.argv[i+2];
	getHttp(i, url);
};

