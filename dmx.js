var options = {
    host: '192.168.1.12',
    sendAll: true
}
 
var artnet = require('artnet')(options);

var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var i = 0;
var loc = 0;
var dir = false;

setInterval(function(){
	// Set data
	if(data[0] >= 255){
		data[0] = 0;
	}
	else{
		data[0] = data[0] + 1;
	}

	// Push to artnet
	artnet.set(16, 1, data);
}, 33);
