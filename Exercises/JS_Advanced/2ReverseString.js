// Using Functions
function reverseString(string) {
	string = string.reverse();
	return string.join("");
}
let str = ["h", "e", "l", "l", "o"];
// console.log(str, reverseString(str));

// Using Loops
function reverseString2(string) {
	let reversedStr = [];
	for (let i = string.length - 1; i >= 0; i--) {
		reversedStr.push(string[i]);
	}
	return reversedStr;
}

console.log(str, reverseString2(str));

// Using Recursion
function reverseString3(str, start, end) {
	if (start >= end) {
		return;
	}
	[str[start], str[end]] = [str[end], str[start]];
	reverseString3(str, start + 1, end - 1);
}
// reverseString3(str, 0, str.length - 1);
// console.log(str);
