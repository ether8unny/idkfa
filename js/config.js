/* jslint node: true */
'use strict';

//
//	Config
//

var C =
{
	"log":
	{
		'dict':				true,
		'futhark':			true,
		'ioc':				true,
		'keys':				true,
		'stats':			true,
		'text':				true,
		'truncatedict':		true,
		'truncatefuthark':	true,
		'truncatekey':		true,
		'truncatelatin':	true,
		'legend':			true,
		'ulf':				true,
		'dlf':				true,
		'ulr':				true,
		'dlr':				true
	},

	//	Solved by section:		0,1,2,3,4,5,6,15,16
	//	Unsolved by paragraph:	16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32 // 7,8,9,10,11,12,13,14
	"select": {s:[0,1,2,3,4,5,6,15,16]},

	//	Note: To add keys as functions please see lib/engine.js
	"keys":
	[
		[[0]],					// Section 0, 2, 4, 6, 16
		['divinity', 1],		// Section 1
		[[3]],					// Section 3
		['firfumferenfe', 1]	// Section 5
	],

	"raw": "./data/liber-work",

	"encoding": "utf8",

	"delimiter":
	{
		"word":			"-",
		"clause":		".",
		"paragraph":	"&",
		"segment":		"$",
		"chapter":		"§",
		"line":			"/",
		"page":			"%"
	},

	"passthrough": {'-': true, 'F': true, '0': true, '1': true, '2': true, '3': true, '4': true, '5': true, '6': true, '7': true, '8': true, '9': true},

	"ioc":
	{
		"high": {"value": 1.5},
		"medium": {"value": 1.3},
		"low": {"value": 1.1}
	},

	"oeis":
	{
		"file": "./data/oeis",

		"minvalue":		-99999999,
		"maxvalue":		99999999,
		"minlength":	5,
		"limit":		10000
	},

	"dict":
	{
		"file": "./data/word",

		"minchar": 2,
		"maxchar": 6,
		"include":
		[
			'banana',
			'ninja',

			'CONTAINED',
			'WORDS',
			'NUMBERS',

			'DIUINITY',
			'PILGRIM', 'PILGRIMS', 'PILGRIMAGE',
			'TH(I)NGS',
			'INNOCENCE',
			'REALITIES',
			'INSTAR',

			'TOTIENT', 'TOTIENTS',
			'ENCRYPT', 'ENCRYPTED',

			'DECIDE', 'DECIDED',
			'PROFESSOR',
			'INHABIT(I)NG',
			'ARBITRARY',
			'UNREASONABLE',

			'WISDOM',
			'COAN',
			'MASTER',
			'PRIME', 'PRIMES', 'PRIMALITY',

			'CIRCUMFERENCE', 'CIRCUMFERENCES',
			'PRACTICE', 'PRACTICES',
			'BEHAUI(A/O)R', 'BEHAUI(A/O)RS',
			'DECEPTI(A/O)N',
			'PRESERUE', 'PRESERUATI(A/O)N',
			'DECEPT', 'DECEPTI(A/O)N',
			'ADHERENCE',
			'DOGMA',

			'EXPLAIN', 'EXPLAINED',
			'ENLIGHTENED',

			'CWESTI(A/O)N',

			'PARABLE',
			'TUNNEL', 'TUNNEL(I)NG'
		],
		"exclude": ['i', 'he', 'cat', 'dog']
	}
};

module.exports = C;