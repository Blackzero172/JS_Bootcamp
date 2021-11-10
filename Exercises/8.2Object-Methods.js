const mycountry = {
	country: "Sweden",
	capital: "Stockholm",
	language: "Swedish",
	population: "10.35",
	neighbours: ["Finland", "Denmark", "Norway"],
};
mycountry.describe = function () {
	console.log(
		`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
	);
};
mycountry.describe();
mycountry.checkIsland = function () {
	this.isIsland =
		this.neighbours.length > 0
			? (this.isIsland = false)
			: (this.isIsland = true);
};
mycountry.checkIsland();
console.log(mycountry);
