/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
const greet = () =>{
    let welcome = "Welcome to Fullstack Bootcamp"
    return welcome;
}

const pow = (a) => a * a;


// From function expressions to IIFE functions.
(function(a){
    a=2;
    Math.sqrt(a);
})();

(function(a, b) { Math.random() * (a - b) + b
})();