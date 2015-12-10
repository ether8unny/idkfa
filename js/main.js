/* jslint node: true */
'use strict';

//
//	Main
//
//	Words:		3623
//	Clauses:	192
//	Paragraphs:	35
//	Segments: 	17
//	Lines: 		746
//	Pages: 		71

// Good: 7, 9, 11, 12
// Semi: 8

var	C = require('./config'),
	E = require('./lib/engine'),
	K = require('./lib/keys'),
	L = require('./lib/log'),
	N = require('./lib/numbers'),
	O = require('./lib/oeis'),
	S = require('./lib/source');

var	CL	= require('cluster');
var	CPU	= require('os').cpus().length;

// Fork on multi core.
if (CL.isMaster)
{
	CPU = 1;

	while (CPU --) CL.fork();
	CL.on('SIGINT', function () {process.exit(0);});
}

else
{
	// Container.
	var data = [], keys = [];

	// Load Liber.
	var data = S.get({s:[0,15]});

	// Load OEIS sequences and add them as keys.
	//var oeis = O.select(0);
	//if (oeis[1] === -1) console.log('\nAttention: OEIS sequences were filtered. ' + oeis[0].length + ' passed.');
	//if (oeis[0].length > 0) for (var i = 0; i < oeis[0].length; i ++) K.add(oeis[0][i]);



	// Crunch data.
	data = E.process(data, 1);

	// Display data and exit.
	L.toScreen(data);
	//if (L.toScreen(data)) process.exit(0);
}