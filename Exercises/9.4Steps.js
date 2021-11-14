function step(num) {
	for (let row = 0; row <= num; row++) {
		let string = "";
		let hashtag = 0;
		for (; hashtag <= row; hashtag++) {
			string += "# ";
		}
		for (let dots = num; dots >= hashtag; dots--) {
			string += ". ";
		}

		console.log(string);
	}
}
step(25);
