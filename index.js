var OSinfo = require('./modules/OSInfo');
var time2 = require('./modules/time');

process.stdin.setEncoding('utf-8');
console.log('App started, please write instruction below...');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/sayhello': 
				process.stdout.write('hello\n');
				break;
			case '/getOSinfo':
				OSinfo.print();
				break;
			case '/czas':
				time2.time();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});