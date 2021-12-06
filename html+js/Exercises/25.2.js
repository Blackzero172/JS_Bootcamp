const person = {
	name: "John Wick",
	printName() {
		console.log(this.name);
	},
	printNameDelayed() {
		const { name } = this;
		setTimeout(function () {
			console.log(name);
		}, 1000);
	},
};
person.printNameDelayed.call(person);
