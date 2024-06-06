// Function expressions in Javascript are anothe way to define functions.
// Unlike function declarations, function expressions are not available once
// defined (not hoisted).
// Function expression is assigned to a variable

// SYNTAX
const demo = function(parameter) {
    // block of code
};

// Basic Demo
const greet = function(name) {
    return `Hello ${name}`;
};
console.log(greet('Name'));
// give a variable 'name' a function that outputs a given name

// Immediatly Invoked Function Expression (IIFE)
// an IIFE is a function expresson that is immediately executed after its defined
(function() {
    console.log('This is an IIFE');
})();
// An anonymous function expression inside parentheses is defined
// Function is immediately called using '()'
// The function runs and outputs the message