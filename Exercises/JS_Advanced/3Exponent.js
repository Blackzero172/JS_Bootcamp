// function exponent(a, n, currentN, sum) {
// 	if (currentN === n) {
// 		return sum;
// 	} else {
// 		if (sum === 0) {
// 			sum = a;
// 		} else {
// 			a = a * a;
// 		}

// 		return exponent(a, n, currentN + 1, sum);
// 	}
// }
// let sum = 0;
// console.log(exponent(4, 4, 0, sum), Math.pow(4, 4));

// function exponent(a, n) {
// 	if (typeof finalNumber === "undefined") finalNumber = Math.pow(a, n);

// 	if (a === finalNumber) {
// 		return a;
// 	} else {
// 		return exponent(a * a, n);
// 	}
// }
// console.log(exponent(4, 8), Math.pow(4, 8));

function exponent(a, n) {
	if (n === 0) {
		return 1;
	} else {
		return a * exponent(a, n - 1);
	}
}
console.log(exponent(4, 4), Math.pow(4, 4));
