var net = require('net');

var timeport = process.argv[2];
var now = new Date;
var month=''+now.getMonth()+1;
var day = now.getDate()
var hour = now.getHours();
var minute = now.getMinutes();

var current = now.getFullYear()+'-'+month+'-'+day;
current = current+' '+hour+':'+minute;


var server = net.createServer(function(c) { //'connection' listener
	    c.end(current+'\r\n');
});
server.listen(timeport, function() { //'listening' listener
	  console.log('server bound on tcp port '+timeport);
});
