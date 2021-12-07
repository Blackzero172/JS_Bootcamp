function makeAllCaps(arr) {
	return new Promise((resolve, reject) => {
		const capsArr = arr.map((item) => {
			if (!/\w+/gi.test(item)) {
				reject(item);
			} else {
				return item.toUpperCase();
			}
		});
		resolve(capsArr);
	});
}
function sortWords(arr) {
	return new Promise((resolve, reject) => {
		arr.forEach((item) => {
			if (!/\w+/gi.test(item)) {
				reject(item);
			}
		});
		arr.sort();
		resolve(arr);
	});
}
makeAllCaps(["dsadsa", "cdacdas", "asdasd", "bdsabdsa"])
	.then((arr) => {
		return sortWords(arr);
	})
	.then((arr) => {
		console.log("sorted array", arr);
	})
	.catch((item) => {
		console.log(`${item} contains a non-alphabetic character`);
	});

makeAllCaps(["dsadsa", "cdacdas", "asdasd", "bdsabd2a"])
	.then((arr) => {
		return sortWords(arr);
	})
	.then((arr) => {
		console.log("sorted array", arr);
	})
	.catch((item) => {
		console.log(`${item} contains a non-alphabetic character`);
	});
