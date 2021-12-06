function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
	this.name = pokemonName;
	this.type = pokemonType;
	this.attackList = pokemonAttackList;
	this.callPokemon = function () {
		console.log(`I Choose You ${this.name}`);
	};
	this.attack = function (attackNumber) {
		console.log(`${this.name} used ${this.attackList[attackNumber]}`);
	};
}
const Charmander = new Pokemon("Charmander", "Fire", ["Fireball", "Fire Tail", "Fire Breath"]);
const Pikachu = new Pokemon("Pikachu", "Lightning", ["Thunderbolt", "Slam", "Wild Charge"]);
const Squirtle = new Pokemon("Squirtle", "Water", ["Water Gun", "Rain Dance", "Tail Whip"]);
Charmander.callPokemon();
Pikachu.callPokemon();
Squirtle.callPokemon();
Charmander.attack(0);
Pikachu.attack(0);
Squirtle.attack(0);
