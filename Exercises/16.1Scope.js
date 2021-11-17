function funcA() {
	console.log(a); //logs undefined due to hoising of the initialization of the var
	console.log(foo()); //logs 2
	var a = 1;
	function foo() {
		return 2;
	}
}
// funcA();

var fullName = "John Doe"; //declared to John Doe;
var obj = {
	fullName: "Colin Ihrig", //changed to Colin Ihrig
	prop: {
		fullName: "Aurelio De Rosa", //changed to Aurelio De Rosa
		getFullName: function () {
			return this.fullName; //returns Aurelio De Rosa
		},
	},
};
console.log(obj.prop.getFullName()); //logs Aurelio De Rosa
var test = obj.prop.getFullName; //logs undefined due to the This keyword
console.log(test());

function funcB() {
	//let a = b = 0; this line is going to throw and exception because b is not defined and we cant declare the value of 2 vars together
	//the correct way
	let b = 0;
	let a = b;
	a++;
	console.log(typeof a);
	console.log(typeof b);
	return a; //return NaN in case a is not declared,in this case it returns 1
}
funcB();
//console.log(typeof a); throws an exception because a is out of scope
//console.log(typeof b); throws an exception because a is out of scope
//the right way is to log them inside the function

function funcD1() {
	//d = 1; there is no let keyword
	let d = 1;
	console.log(d);
}
funcD1();
// console.log(d) this is out of scope.
//we need to log inside the function
function funcD2() {
	var e = 1;
	console.log(e);
}
funcD2();
//console.log(e); this is out of scope
//we need to log inside the function

function funcE() {
	console.log("Value of f in local scope: ", f); //this logs 1 because by the time we call this function the var f is declared;
}
console.log("Value of f in global scope: ", f); // this logs undefined due to hoisting ;
var f = 1;
funcE();
