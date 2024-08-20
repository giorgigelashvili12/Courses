// A ternary operator is a concise way to perform conditional operators in javascript.
// The ternary operator takes three operands and is written using the '?' and ':' symbols.
condition ? expressionIfTrue : expressionIfFalse;
// How it works:
// condition: an expression that evaluates to true or false.
// expressionIfTrue: The expression that gets executed if the condition is true
// expressionIfFalse: the expression that gets executed if the condition is false
let number = 5;
let message = (number > 0) ? "The number is positive" : "The number is not positive";
// the condition is 'number > 0'
// if the condition is true, execute the first message, if not then the other one.
console.log(message); // Output: The number is positive