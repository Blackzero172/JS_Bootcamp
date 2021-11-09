// Array Fill
let arr1 = new Array(100);
arr1.fill(0,0,100);
console.log(arr1.length);

// Array Range
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let arr2 = range(1,100,1);
console.log(arr2);

// Object to Array
let object = {someValue : "value",Value2:"value2"}
let objectArray = Object.keys(object);
console.log(objectArray);

// Array to Object
let arrayObject = Object.assign({},arr2);
console.log(arrayObject);

// Non-Referenced Array
let arr3 = Array.from(arr2);
arr3[9] = -10;

// Referenced Array
let arr4 = arr2;
arr3[9] = -10;