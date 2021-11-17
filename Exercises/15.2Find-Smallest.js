// The first if statement(if(a>b>c)) is not written correctly, to specify more than 1 condition you need to use the AND operator(&&) or the OR (||) otherwise your if statement will not work
//The second if statement(if(a>c>b)) is not correct like the first one also the order of the conditions is wrong because in this case if the statement returns true it should return the var b and not the var a
// I used breakpoints and the variables window to find the bug
// The third problem is that the function called is not defined because the misspelling of the calling

// function findSmallest(a, b, c) {
// 	if (a > b > c) {
// 		return c;
// 	} else if (a > c > b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// findSmalest(52, 66, 2);

// the proper way to code with is:
function findSmallest(a, b, c) {
	if (c < a && c < b) {
		return c;
	} else if (a < c && a < b) {
		return a;
	} else {
		return b;
	}
}
console.log(findSmallest(52, 66, 2));
