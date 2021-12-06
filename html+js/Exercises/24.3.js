function ArrayProto(arr) {
	this.arr = arr;
	this.filter = function (filter) {
		const filteredArray = [];
		arr.forEach((item) => {
			if (item === filter) {
				filteredArray.push(item);
			}
		});
		return filteredArray;
	};
	this.find = function (filter) {
		for (let item of arr) {
			if (item === filter) return item;
		}
	};
}
const arr = new ArrayProto([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(arr.filter(0));
console.log(arr.find(0));
