const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];
function logNeighbours() {
	for (let i = 0; i < listOfNeighbours.length; i++) {
		for (let j = 0; j < listOfNeighbours[i].length; j++) {
			console.log("Neighbour :", listOfNeighbours[i][j]);
		}
	}
}
logNeighbours();
