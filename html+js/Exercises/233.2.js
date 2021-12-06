const storm = {
	superPower: "Weather Control",
	logPower: printSuperPower,
};
function printSuperPower() {
	console.log("my superpower is " + this.superPower);
}
storm.logPower();
