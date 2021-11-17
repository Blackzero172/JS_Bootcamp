const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const ascSort = foods.slice().sort();
const desSort = foods.slice().sort().reverse();

console
	.log
	// `String in Ascending Order "${ascSort}" ::::: String in Descending Order "${desSort}"`
	();

const foodsWithUpperCase = ["falafel", "Sabich", "hummus", "pizza with extra pineapple"];

const ascSortUpper = foodsWithUpperCase
	.slice()
	.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
const desSortUpper = foodsWithUpperCase
	.slice()
	.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));

// console.log(`String in Ascending Order "${ascSortUpper}" ::::: String in Descending Order "${desSortUpper}"`);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const ascSortLongest = words.slice().sort((a, b) => a.length - b.length);
const desSortLongest = words.slice().sort((a, b) => b.length - a.length);
console.log(
	`Longest Words in Ascending Order "${ascSortLongest}" :::::: Longest Words in Descending Order "${desSortLongest}"`
);
