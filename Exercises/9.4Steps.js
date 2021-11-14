function step(num) {
	for (let i = 0; i <= num; i++) {
		let string = "";
		let j = 0;
		for (; j <= i; j++) {
			string += "# ";
		}
		for (let k = num; k >= j; k--) {
			string += ". ";
		}

		console.log(string);
	}
}
step(25);
