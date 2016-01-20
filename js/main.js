/* jslint node: true */
'use strict';

//
//	Main
//
//	Solved by section:		0,1,2,3,4,5,6,15,16
//	Unsolved by paragraph:	16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32

var	C = require('./config'),
	E = require('./lib/engine'),
	L = require('./lib/log'),
	S = require('./lib/source');


// Load text.
console.log('\r');
//console.log('[-] Loading chunks..');
var data = S.get({s:[0,1,2,3,4,5,6,15,16]});
//console.log('[-] Done loading chunks..');

// Process data with n iterations.
//console.log('[-] Processing data..');
data = E.process(data, 1);
//console.log('[-] Done processing data..');

// Log data.
//console.log('[-] Logging..');
L.log(data, C.log);
//console.log('[-] Done Logging..');