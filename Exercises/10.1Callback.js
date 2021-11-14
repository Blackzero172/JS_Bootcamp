function isString(varToCheck, logToConsole) {
	if (typeof varToCheck === "string") {
		logToConsole(varToCheck);
	}
}
function logVar(string) {
	console.log(string);
}
isString("123", logVar);

function firstWordCap(sentence, callback) {
	index = 0;

	while (true) {
		if (sentence[index] === " ") break;
		sentence = sentence.replace(sentence[index], sentence[index].toUpperCase());
		index++;
	}
	return callback(sentence);
}
function replaceSpaceWithDash(string) {
	string = string.replace(/[ ]/gi, "-");
	return string;
}
console.log(firstWordCap("this is a string", replaceSpaceWithDash));
function replaceSpaceWithPlus(string) {
	string = string.replace(/[ ]/gi, "+");
	return string;
}
console.log(firstWordCap("this is a string", replaceSpaceWithPlus));
function sumAndPow(n1, n2, callback) {
	let sum = n1 + n2;
	return callback(sum);
}
function power(num) {
	num = Math.pow(num, 2);
	return num;
}
console.log(sumAndPow(5, 6, power));
