var b = 1;
function someFunction(number) {
	function otherFunction(input) {
		return b; // returns 1
	}
	b = 5;
	return otherFunction; //returns the function itself because we forgot to add perens
}
var firstResult = someFunction(9); // is declared to the function otherFunction
var result = firstResult(2); // is declared to 5 because it calls otherFunction

var a = 1;
function b2() {
	a = 10;
	return; // returns undefined
	function a() {} //doesnt get called because we return right before it
}
b2();
console.log(a); //logs 1 because the declration of the a var inside the function stays within the function scope

let i;
for (i = 0; i < 3; i++) {
	const log = () => {
		console.log(i); // returns 3,3,3 because setTimeout converts this function to Async and thus it's at the end of the Call Stack
	};
	setTimeout(log, 100);
}
