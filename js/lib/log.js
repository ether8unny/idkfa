/* jslint node: true */
'use strict';

//
//	Log
//

var C	= require('../config');
var K	= require('chalk');
var _	= require('underscore');

var L =
{
	"log": function(data, level)
	{
		var lenFuthark	= 125;
		var lenIoC		= 10;
		var lenKey		= 110;
		var lenString	= (level.ioc) ? 100 : 117;
		var lenWords	= 115;

		var str = '\n';

		// Loop Selectors
		for (var i = 0; i < data.length; i ++)
		{
			// Loop Chunks
			for (var j = 0; j < data[i].length; j ++)
			{
				str += (Object.keys(level).length > 0) ? K.bold.red('Data: ' + j) + '\n\n' : '';
				str += (level.stats) ? 'Words: ' + data[i][j].wordcount + ' // FChars: ' + data[i][j].charcount + ' // CRC: ' + data[i][j].crc + '\n\n' : '';
				str += (level.futhark) ? (level.truncate) ? data[i][j].futhark.substring(0, lenFuthark) + '\n\n' : data[i][j].futhark + '\n\n' : '';
				//str += (keys || dict) ? '---------------------------------------------------------------------------------------------------------------------------' + '\n\n' : '';

				// Display chunk data.
				for (var k = 0; k < data[i][j].length; k ++)
				{
					data[i][j][k].key = (level.truncate) ? data[i][j][k].key.substring(0, lenKey) : data[i][j][k].key;

					str += (level.keys) ? (level.legend) ? K.bold('Key:\t') + data[i][j][k].key + '\n\n' : data[i][j][k].key + '\n\n' : '';

					var ulfioc = '', dlfioc = '', ulrioc = '', dlrioc = '';
					var ulftxt = '', dlftxt = '', ulrtxt = '', dlrtxt = '';

					if (level.ioc)
					{
						// Prepare IoC
						if (level.ulf) ulfioc = (data[i][j][k].ulf.ioc).toString().substring(0, lenIoC);
						if (level.dlf) dlfioc = (data[i][j][k].dlf.ioc).toString().substring(0, lenIoC);
						if (level.ulr) ulrioc = (data[i][j][k].ulr.ioc).toString().substring(0, lenIoC);
						if (level.dlr) dlrioc = (data[i][j][k].dlr.ioc).toString().substring(0, lenIoC);

						// Color IoC
						if (level.ulf) ulfioc = (data[i][j][k].ulf.ioc >= C.ioc.low.value && data[i][j][k].ulf.ioc < C.ioc.medium.value) ? K.green(ulfioc) : ulfioc;
						if (level.dlf) dlfioc = (data[i][j][k].dlf.ioc >= C.ioc.low.value && data[i][j][k].dlf.ioc < C.ioc.medium.value) ? K.green(dlfioc) : dlfioc;
						if (level.ulr) ulrioc = (data[i][j][k].ulr.ioc >= C.ioc.low.value && data[i][j][k].ulr.ioc < C.ioc.medium.value) ? K.green(ulrioc) : ulrioc;
						if (level.dlr) dlrioc = (data[i][j][k].dlr.ioc >= C.ioc.low.value && data[i][j][k].dlr.ioc < C.ioc.medium.value) ? K.green(dlrioc) : dlrioc;

						if (level.ulf) ulfioc = (data[i][j][k].ulf.ioc >= C.ioc.medium.value && data[i][j][k].ulf.ioc < C.ioc.high.value) ? K.yellow(ulfioc) : ulfioc;
						if (level.dlf) dlfioc = (data[i][j][k].dlf.ioc >= C.ioc.medium.value && data[i][j][k].dlf.ioc < C.ioc.high.value) ? K.yellow(dlfioc) : dlfioc;
						if (level.ulr) ulrioc = (data[i][j][k].ulr.ioc >= C.ioc.medium.value && data[i][j][k].ulr.ioc < C.ioc.high.value) ? K.yellow(ulrioc) : ulrioc;
						if (level.dlr) dlrioc = (data[i][j][k].dlr.ioc >= C.ioc.medium.value && data[i][j][k].dlr.ioc < C.ioc.high.value) ? K.yellow(dlrioc) : dlrioc;

						if (level.ulf) ulfioc = (data[i][j][k].ulf.ioc >= C.ioc.high.value) ? K.red(ulfioc) : ulfioc;
						if (level.dlf) dlfioc = (data[i][j][k].dlf.ioc >= C.ioc.high.value) ? K.red(dlfioc) : dlfioc;
						if (level.ulr) ulrioc = (data[i][j][k].ulr.ioc >= C.ioc.high.value) ? K.red(ulrioc) : ulrioc;
						if (level.dlr) dlrioc = (data[i][j][k].dlr.ioc >= C.ioc.high.value) ? K.red(dlrioc) : dlrioc;
					}

					if (level.text)
					{
						// Prepare Text
						if (level.ulf) ulftxt = (level.truncate) ? data[i][j][k].ulf.chars.join('').replace(/[-]/g, '  ').substring(0, lenString) : data[i][j][k].ulf.chars.join('').replace(/[-]/g, '  ');
						if (level.dlf) dlftxt = (level.truncate) ? data[i][j][k].dlf.chars.join('').replace(/[-]/g, '  ').substring(0, lenString) : data[i][j][k].dlf.chars.join('').replace(/[-]/g, '  ');
						if (level.ulr) ulrtxt = (level.truncate) ? data[i][j][k].ulr.chars.join('').replace(/[-]/g, '  ').substring(0, lenString) : data[i][j][k].ulr.chars.join('').replace(/[-]/g, '  ');
						if (level.dlr) dlrtxt = (level.truncate) ? data[i][j][k].dlr.chars.join('').replace(/[-]/g, '  ').substring(0, lenString) : data[i][j][k].dlr.chars.join('').replace(/[-]/g, '  ');

						// Color Text
						if (level.ulf) ulftxt = (data[i][j][k].ulf.ioc >= C.ioc.low.value && data[i][j][k].ulf.ioc < C.ioc.medium.value) ? K.green(ulftxt) : ulftxt;
						if (level.dlf) dlftxt = (data[i][j][k].dlf.ioc >= C.ioc.low.value && data[i][j][k].dlf.ioc < C.ioc.medium.value) ? K.green(dlftxt) : dlftxt;
						if (level.ulr) ulrtxt = (data[i][j][k].ulr.ioc >= C.ioc.low.value && data[i][j][k].ulr.ioc < C.ioc.medium.value) ? K.green(ulrtxt) : ulrtxt;
						if (level.dlr) dlrtxt = (data[i][j][k].dlr.ioc >= C.ioc.low.value && data[i][j][k].dlr.ioc < C.ioc.medium.value) ? K.green(dlrtxt) : dlrtxt;

						if (level.ulf) ulftxt = (data[i][j][k].ulf.ioc >= C.ioc.medium.value && data[i][j][k].ulf.ioc < C.ioc.high.value) ? K.yellow(ulftxt) : ulftxt;
						if (level.dlf) dlftxt = (data[i][j][k].dlf.ioc >= C.ioc.medium.value && data[i][j][k].dlf.ioc < C.ioc.high.value) ? K.yellow(dlftxt) : dlftxt;
						if (level.ulr) ulrtxt = (data[i][j][k].ulr.ioc >= C.ioc.medium.value && data[i][j][k].ulr.ioc < C.ioc.high.value) ? K.yellow(ulrtxt) : ulrtxt;
						if (level.dlr) dlrtxt = (data[i][j][k].dlr.ioc >= C.ioc.medium.value && data[i][j][k].dlr.ioc < C.ioc.high.value) ? K.yellow(dlrtxt) : dlrtxt;

						if (level.ulf) ulftxt = (data[i][j][k].ulf.ioc >= C.ioc.high.value) ? K.red(ulftxt) : ulftxt;
						if (level.dlf) dlftxt = (data[i][j][k].dlf.ioc >= C.ioc.high.value) ? K.red(dlftxt) : dlftxt;
						if (level.ulr) ulrtxt = (data[i][j][k].ulr.ioc >= C.ioc.high.value) ? K.red(ulrtxt) : ulrtxt;
						if (level.dlr) dlrtxt = (data[i][j][k].dlr.ioc >= C.ioc.high.value) ? K.red(dlrtxt) : dlrtxt;
					}

					// Glue together string
					if (level.ioc || level.text)
					{
						var tfoo1 = '', tfoo2 = '', tfoo3 = '', tfoo4 = '';

						if (level.ioc)
						{
							if (level.ulf) tfoo1 = ulfioc + '\t';
							if (level.dlf) tfoo2 = dlfioc + '\t';
							if (level.ulr) tfoo3 = ulrioc + '\t';
							if (level.dlr) tfoo4 = dlrioc + '\t';
						}

						if (level.ulf) str += (level.legend) ? K.bold('ULF:\t') + tfoo1 + ulftxt + '\n\n' : tfoo1 + ulftxt + '\n\n';
						if (level.dlf) str += (level.legend) ? K.bold('DLF:\t') + tfoo2 + dlftxt + '\n\n' : tfoo2 + dlftxt + '\n\n';
						if (level.ulr) str += (level.legend) ? K.bold('ULR:\t') + tfoo3 + ulrtxt + '\n\n' : tfoo3 + ulrtxt + '\n\n';
						if (level.dlr) str += (level.legend) ? K.bold('DLR:\t') + tfoo4 + dlrtxt + '\n\n' : tfoo4 + dlrtxt + '\n\n';
					}

					if (level.dict)
					{
						// Glue matched words to the end
						str += (level.legend) ? K.bold('ULF:\t') : '';
						var tmp1 = '';
						if (level.ulf) for(var ii = 0; ii < Object.keys(data[i][j][k].ulf.frequency).length; ii ++) tmp1 += Object.keys(data[i][j][k].ulf.frequency)[ii] + ' ';
						if (level.ulf) str += (level.truncate) ? K.magenta(tmp1.substring(0, lenWords)) : K.magenta(tmp1);

						str += (level.legend) ? '\n\n' + K.bold('DLF:\t') : '';
						var tmp2 = '';
						if (level.dlf) for(var jj = 0; jj < Object.keys(data[i][j][k].dlf.frequency).length; jj ++) tmp2 += Object.keys(data[i][j][k].dlf.frequency)[jj] + ' ';
						if (level.dlf) str += (level.truncate) ? K.magenta(tmp2.substring(0, lenWords)) : K.magenta(tmp2);

						str += (level.legend) ? '\n\n' + K.bold('ULR:\t') : '';
						var tmp3 = '';
						if (level.ulr) for(var kk = 0; kk < Object.keys(data[i][j][k].ulr.frequency).length; kk ++) tmp3 += Object.keys(data[i][j][k].ulr.frequency)[kk] + ' ';
						if (level.ulr) str += (level.truncate) ? K.magenta(tmp3.substring(0, lenWords)) : K.magenta(tmp3);

						str += (level.legend) ? '\n\n' + K.bold('DLR:\t') : '';
						var tmp4 = '';
						if (level.dlr) for(var ll = 0; ll < Object.keys(data[i][j][k].dlr.frequency).length; ll ++) tmp4 += Object.keys(data[i][j][k].dlr.frequency)[ll] + ' ';
						if (level.dlr) str += (level.truncate) ? K.magenta(tmp4.substring(0, lenWords)) : K.magenta(tmp4);
					}

					str += '\n\n';

				}

				//str += '\n';
			}
		}

		console.log(str);
	}
};

module.exports = L;