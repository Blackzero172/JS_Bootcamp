const data = [
	{
		name: "John",
		birthday: "1-1-1995",
		favoriteFoods: {
			meats: ["hamburgers", "sausages"],
			fish: ["salmon", "pike"],
		},
	},
	{
		name: "Mark",
		birthday: "10-5-1980",
		favoriteFoods: {
			meats: ["hamburgers", "steak", "lamb"],
			fish: ["tuna", "salmon", "barracuda"],
		},
	},
	{
		name: "Mary",
		birthday: "1-10-1977",
		favoriteFoods: {
			meats: ["ham", "chicken"],
			fish: ["pike"],
		},
	},
	{
		name: "Thomas",
		birthday: "1-10-1990",
		favoriteFoods: {
			meats: ["bird", "rooster"],
			fish: ["salmon"],
		},
	},
	{
		name: "Mary",
		birthday: "1-10-1977",
		favoriteFoods: {
			meats: ["hamburgers", "lamb"],
			fish: ["anchovies", "tuna"],
		},
	},
];

function getNames(array) {
	let namesArray = [];
	array.forEach(function (obj) {
		namesArray.push(obj.name);
	});
	return namesArray;
}
console.log(getNames(data));

function getBirthDay(array) {
	let objBefore1990 = [];
	array.forEach(function (obj) {
		year = obj.birthday;
		year = year.replace("-", "");
		year = year.slice(year.indexOf("-") + 1, year.length);
		if (year <= 1990) {
			objBefore1990.push(obj);
		}
	});
	return objBefore1990;
}

console.log(getBirthDay(data));

function getFoods(array) {
	let meatFood = array.map(function (obj) {
		let string = obj.favoriteFoods.meats.join(" ");
		return string;
	});
	let fishFood = array.map(function (obj) {
		let string = obj.favoriteFoods.fish.join(" ");
		return string;
	});
	let favFood = fishFood.concat(meatFood);
	favFood = favFood.join(" ");
	favFood = favFood.split(" ");
	let foodCounter = {};
	favFood.forEach(function (food) {
		if (foodCounter[food]) {
			foodCounter[food]++;
		} else {
			foodCounter[food] = 1;
		}
	});
	return foodCounter;
}
console.log(getFoods(data));
