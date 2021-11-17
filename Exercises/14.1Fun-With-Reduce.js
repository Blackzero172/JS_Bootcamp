const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const max = arr.reduce((max, currVal) => Math.max(max, currVal));
const sum = arr.reduce((sum, currVal) => {
	if (currVal % 2 === 0) {
		return sum + currVal;
	} else {
		return sum;
	}
}, 0);
const avg =
	arr.reduce((avg, currVal) => {
		return avg + currVal;
	}) / arr.length;

console.log(max);
console.log(sum);
console.log(avg);
