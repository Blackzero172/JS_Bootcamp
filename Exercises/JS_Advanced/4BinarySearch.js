const arr = [1, 2, 4, 6, 8, 10, 56];
function binSearch(arr, funcArr, num) {
	let arrCopy = funcArr.slice(0);
	let index = Math.round(arrCopy.length / 2);
	let comparedNum = arrCopy[index];
	if (num === comparedNum) {
		return arr.indexOf(num);
	}
	if (num > comparedNum) {
		return binSearch(arr, arrCopy.slice(index), num);
	} else if (num < comparedNum) {
		return binSearch(arr, arrCopy.slice(0, index), num);
	}
}
console.log(binSearch(arr, arr, 10));
// const arr = [1, 2, 4, 6, 8, 10, 56];
// function binSearch(arr, num) {
// 	if (typeof arrCopy === "undefined") arrCopy = arr.slice(0);
// 	let index = Math.round(arr.length / 2);
// 	let comparedNum = arr[index];
// 	if (num === comparedNum) {
// 		return arrCopy.indexOf(num);
// 	}
// 	if (num > comparedNum) {
// 		return binSearch(arr.slice(index), num);
// 	} else if (num < comparedNum) {
// 		return binSearch(arr.slice(0, index), num);
// 	}
// }
// console.log(binSearch(arr, arr, 10));
