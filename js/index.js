/* jslint node: true */
'use strict';

//
//	Main
//

var	C = require('./config'),
	E = require('./lib/engine'),
	L = require('./lib/log'),
	S = require('./lib/source');


// Load text.
console.log('\r');
//console.log('[-] Loading chunks..');
var data = S.get(C.select);
//console.log('[-] Done loading chunks..');

// Process data.
//console.log('[-] Processing data..');
data = E.process(data, 1, 1);
//console.log('[-] Done processing data..');

// Log data.
//console.log('[-] Logging..');
L.log(data, C.log);
//console.log('[-] Done Logging..')