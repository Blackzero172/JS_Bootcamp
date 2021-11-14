const worldPop = 7900;
function percentOfWorld(population) {
	return (population / worldPop) * 100;
}
function populationPercentage(array) {
	let percentages = [];
	let i = 0;
	while (percentages.length < array.length) {
		percentages[i] = percentOfWorld(array[i]);
		i++;
	}
	return percentages;
}
console.log(populationPercentage([740, 50, 60, 80, 90]));
