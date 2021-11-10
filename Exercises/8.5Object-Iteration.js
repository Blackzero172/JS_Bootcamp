let obj = {
	value1: "1value",
	value2: "2value",
	value3: "3value",
	value4: "4value",
};
let objValues = [];
let objKeys = [];
objKeys = Object.keys(obj);
objValues = Object.values(obj);
console.log(objValues);
console.log(objKeys);
let newObj = Object.assign(...objValues.map((k, i) => ({ [k]: objKeys[i] })));
console.log(newObj);
