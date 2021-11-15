const candyStore = {
	candies: [
		{
			name: "mint gum",
			id: "as12f",
			price: 2,
			amount: 2,
		},
		{
			name: "twix",
			id: "5hd7y",
			price: 5,
			amount: 4,
		},
	],
	cashRegister: 200,
};
function getCandy(candyStore, id) {
	let wantedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			wantedCandy = candy;
		}
	});
	if (typeof wantedCandy === "undefined") return "Candy not found";
	return wantedCandy;
}
console.log(getCandy(candyStore, "as12f"));

function getPrice(candyStore, id) {
	let wantedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			wantedCandy = candy;
		}
	});
	if (typeof wantedCandy === "undefined") return "Candy not found";
	return `${wantedCandy.name} costs ${wantedCandy.price}$`;
}
console.log(getPrice(candyStore, "as12f"));

function addCandy(candyStore, id, name, price) {
	candyStore.candies.push({ name: name, id: id, price: price, amount: 1 });
}
addCandy(candyStore, "154df", "KotKut", 5);

function buyCandy(candyStore, id) {
	let wantedCandy;
	availableCandy = candyStore.candies;
	availableCandy.forEach(function (candy) {
		if (candy.id === id) {
			wantedCandy = candy;
			candy.amount -= 1;
		}
	});
	candyStore.cashRegister += wantedCandy.price;
}
buyCandy(candyStore, "154df");
console.log(candyStore);
