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
	// i += 130;
	// if(i > 255){
	// 	i = 0;
	// }
	// for(var a = 0; a < 30; a += 3){
	// 	data[a] = i;
	// }

	if(dir){
		loc++;
		if(loc != 0){
			data[((loc-1)*3)+1] = 0;
		}
		else{
			data[(9*3)+1] = 0;
		}
	}
	else{
		loc--;
		if(loc != 9){
			data[((loc+1)*3)+1] = 0;
		}
		else{
			data[(9*3)+1] = 0;
		}
	}

	data[(loc*3)+1] = 255;

	for(var b = 0; b < 16; b++){
		artnet.set(b, 1, data);
	}

	if(loc > 8){
		dir = false;
	}
	else if(loc < 1){
		dir = true;
	}
	// artnet.set(0, 1, data);
}, 33);
