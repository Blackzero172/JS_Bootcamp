const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
function compareArrays(arr1, arr2) {
	let similarFoods = [];
	let index = 0;
	for (let i of food) {
		for (let j of food1) {
			if (i === j) {
				similarFoods[index] = j;
				index++;
			}
		}
	}
	if (similarFoods.length <= 0) {
		return false;
	}
	return similarFoods;
}
console.log(compareArrays(food, food1));
