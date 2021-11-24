function printToN(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
function countX(n, t) {
	let range = 0;
	for (let i = 1; i < n; i++) {
		range++;
	}
	return range / t;
}
function countEven(num) {
	let counter = 0;
	let numArr = Array.from(num.toString());
	for (let num of numArr) {
		counter = num % 2 === 0 ? (counter = counter + 1) : counter;
	}
	return counter;
}
console.log(countEven(180000));
