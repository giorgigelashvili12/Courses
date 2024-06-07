// Arrow functions (introduced in ES6) provide a different syntrax 
// for writing function expression in js. They also perform different behaviours.

// SYNTAX
const func = (parameters) => {
    // block of code here
};
// create a variable with a function declared with the arrow
// this function is given parameters in parentheses
// between the brackets the block of code is put

// Basic Example
const greet = (name) => {
    return `Welcome ${name}`
}
console.log(greet('name'));
// in this example 'Hello (name)' is logged.

// SUMMARY
// Arrow Functions provide a concise way to write function expressions
// They are often used in map filter and reduce array methods.
// its a useful addition to js that offers a shorter and a flexible
// way to write a function, especialy in programming patterns.