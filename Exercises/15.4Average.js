//There are a few problems with this code first being that the programmer is using var instead of let and that bad practice because var is in the global scope while let is in the local scope secondly they are not declaring their var as a number and so when you add undefined and a number it returns NaN third of all they return the sum without dividing it by the arr.length or the amount of items where averaging.

// function calcAverage(arr) {
// 	var sum;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}
// 	return sum;
// }
// calcAverage([85, 90, 92]);

//the proper way to code this would be:
function calcAverage(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
calcAverage([85, 90, 92]);
