const worldPop = 7900;
function percentOfWorld(population) {
	return (population / worldPop) * 100;
}
function populationPercentage(array) {
	let percentages = [];
	for (let i = 0; i < array.length; i++) {
		percentages[i] = percentOfWorld(array[i]);
	}
	return percentages;
}
console.log(populationPercentage([740, 50, 60, 80, 90]));
