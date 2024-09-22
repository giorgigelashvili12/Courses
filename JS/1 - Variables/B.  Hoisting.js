// Variable Hoisting

// Hoisting - JS Hoisting is a behaviour where variable and function declarations are moved to the
// top of the scope. This means you can work with the code before it is declared in the code, but
// their initialization remains the same.

// When you declare a variable using 'var' keyword Javascript Hoists the declaration
// to the top of the scope, but initialization does not get hoisted.
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// In this code, 'var x' declaration is hoisted to the top of the scope, however, the initialization is not hoisted