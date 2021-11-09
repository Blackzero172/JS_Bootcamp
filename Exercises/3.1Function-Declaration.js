/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
const greet = function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
};

const pow = function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
};

const sum = function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
};

// From function expressions to function declarations
function Hello() {
  "Hello!";
}

function square(a) {
  Math.sqrt(a);
}

function random(a, b) {
  Math.random() * (a - b) + b;
}
