const arr = [1, 7, 3, 0, -5, 7, 3, 9];
function printNumbers() {
  console.log("Numbers inside the array are:");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function arrayLength() {
  let length = 0;
  for (let i in arr) {
    length++;
  }
  return length;
}
function arraySum() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
function arrayMulti() {
  let multi = 0;
  for (let i = 0; i < arr.length; i++) {
    multi *= arr[i];
  }
  return multi;
}
printNumbers();
console.log(arrayLength());
console.log(arraySum());
console.log(arrayMulti());
