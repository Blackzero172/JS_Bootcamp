//The problem with this is code is that it's using const instead of let for the sum variable and so it cant change the value of the sum var after declaration abd
//Secondly it doesn't have a return value and so the function is going to return undefined
//Third of all there is no comma between the variables when the function was called

// I Used breakpoints and the variables window to find the bug

// function getSum(arr1, arr2) {
// 	const sum = 0;
// 	for (let i = 0; i < arr1.length; i++) {
// 		sum += arr1[i];
// 	}
// 	for (let i = 0; i < arr2.length; i++) {
// 		sum += arr2[i];
// 	}
// }

// getSum([1, 2, 3][(5, 66, 23)]);

//the proper way to write this is code is like this
function getSum(arr1, arr2) {
	let sum = 0;
	for (let i = 0; i < arr1.length; i++) {
		sum += arr1[i];
	}
	for (let i = 0; i < arr2.length; i++) {
		sum += arr2[i];
	}
	return sum;
}

console.log(getSum([1, 2, 3], [5, 66, 23]));
