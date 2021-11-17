//The first problem with this code is that it's using the index as if it's starts from 1 and 0 which in causes our second problem and that is it adds up an undefined value to the number because the index is out of range and thus we get our final problem which is the return value is NaN due to an undefined being added to the sum.

//I Used the variable window to figure this out

// function getSumOfEven(arr) {
// 	return arr[2] + arr[4] + arr[6] + arr[8] + arr[10];
// }
// getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//the proper way to code this is
function getSumOfEven(arr) {
	return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
