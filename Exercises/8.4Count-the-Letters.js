const arr = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
const lettersCounter = {};
function countTheLetters(arr) {
	for (let index in arr) {
		let string = arr[index];
		string = string.toLowerCase();
		string = string.replace(" ", "");
		for (let i = 0; i < string.length; i++) {
			let character = string.charAt(i);
			if (lettersCounter[character]) {
				lettersCounter[character]++;
			} else {
				lettersCounter[character] = 1;
			}
		}
	}
}
countTheLetters(arr);
console.log(lettersCounter);
