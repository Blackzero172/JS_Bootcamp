const hero = {
	health: 5,
	power: 68,
	getStrength: function () {
		if (this.health <= 5) {
			return this.power - 10;
		} else return this.power;
	},
};
function whoIsStronger(getStrength) {
	const myStrength = 82;
	if (getStrength() < myStrength) {
		return "I am stronger";
	} else return "You are stronger";
}
//this will return you are strong because when we referenced the getStrength function the value of this changed and so it will return undefined
// Wrong
// console.log(whoIsStronger(hero.getStrength));
// to fix this we need to bind our hero to getStrength
// Right
console.log(whoIsStronger(hero.getStrength.bind(hero)));
