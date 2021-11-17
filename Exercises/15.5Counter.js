//the problem with this code is that when it increments counter it doens't delcare it so it's not actually changing the value of counter and so counter returns the number 0.

// function countOccurrences(str, char) {
// 	let counter = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (str.charAt(i) === char) {
// 			counter + 1;
// 		}
// 	}
// 	return counter;
// }
// countOccurrences("ini mini miny moe", "n");

// the proper way to code this would be:
function countOccurrences(str, char) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === char) {
			counter++; //or counter += 1
		}
	}
	return counter;
}
countOccurrences("ini mini miny moe", "n");
