function time() {
	
	process.stdout.write('podaj czas w sekundach? \n');
	process.stdin.on('data', function(number) {
		var userInput = number.toString().trim();
			h = Math.floor(number / 3600);
			m = Math.floor(number % 3600 / 60);
			s = number % 60;
		console.log('podałeś czas: ' + h + ' godzin ' + m + ' minut ' + s + ' sekund');
	});
}
exports.time = time;

function timeOfWork(operate) {
	var acting = (Math.floor(operate / 3600) % 24) +' godz. '+ (Math.floor(operate / 60) % 60) +' min. ' + Math.floor(operate % 60) +' sek.';

	return acting;
}
exports.print = timeOfWork;