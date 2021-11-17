const numbers = [1, -5, 666, 2, 400, 11];

const ascSort = numbers.slice().sort((a, b) => a - b);
const desSort = numbers.slice().sort((a, b) => b - a);

console.log(
	`Numbers sorted in Ascension Order ${ascSort} :::: Numbers sorted in Descension Order ${desSort}`
);
