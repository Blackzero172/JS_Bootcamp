function doubleValues(arr) {
	let newArr = arr.map(function (num) {
		return num * 2;
	});
	return newArr;
}

function onlyEvenValues(arr) {
	let newArr = [];
	arr.forEach(function (num) {
		if (num % 2 === 0) {
			newArr.push(num);
		}
	});
	return newArr;
}

function showFirstAndLast(arr) {
	let newArr = arr.map(function (el, index) {
		if (typeof el === "string") {
			newItem = Array.from(el);
			el = "";
			newItem.forEach(function (char, ind) {
				if (ind === 0 || ind === newItem.length - 1) {
					el += char;
				}
			});
		}
		return el;
	});
	return newArr;
}

function vowelCount(str) {
	str = str.toLowerCase();
	str = Array.from(str);
	let lettersCounter = {};
	let vowelRegEx = /[aeiou]/gi;
	str.map(function (char) {
		if (lettersCounter[char]) {
			if (vowelRegEx.test(char)) {
				return lettersCounter[char]++;
			} else {
				return (lettersCounter[char] = 1);
			}
		}
	});
	return lettersCounter;
}

function capString(str) {
	str = Array.from(str);
	let newStr = str.map(function (string) {
		return string.toUpperCase();
	});
	newStr = newStr.join("");
	return newStr;
}

function shiftLetters(string) {
	let num = -1;
	string = string.toLowerCase();
	string = Array.from(string);
	let result = "";
	let decodedResult = "";
	let charcode = 0;
	string.forEach(function (char) {
		charcode = char.charCodeAt() + num;
		result += charcode;
		decodedResult += String.fromCharCode(charcode);
	});
	return `Encoded UTF-16 String :(${result})   Decoded UTF-16 String:(${decodedResult}) `;
}

function swapCase(string) {
	string = string.split(" ");
	let cappedWords = string.map(function (word, index) {
		if (index % 2 === 0) {
			word = word.toUpperCase();
		}
		return word;
	});
	cappedWords = cappedWords.join(" ");
	return cappedWords;
}
console.log(swapCase("this is a string"));
