function countDownFor(number) {
	for (let i = number; i > 0; i--) console.log(i);
}
function countDownRecursive(number) {
	if (number <= 0) return;

	console.log(number);
	countDownRecursive(number - 1);
}
function countDownWOExit(number) {
	if (number > 0) {
		console.log(number);
		countDownWOExit(number - 1);
	}
}
