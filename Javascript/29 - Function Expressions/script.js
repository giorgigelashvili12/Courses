// In JS functions are created using function keyword. You can use function declaration
// or expression

// FUNCTION DECLARATION
// SYNTAX
function functionName(parameters) {
    // code to be executed
    return parameters;
}

// EXAMPLE USAGE
function addition(a, b) {
    return a + b;
}

// FUNCTION EXPRESSION
const addResult = function (a, b) {return a + b}; // Anonymous func
let x = addResult(2, 3);
// Anonymous func called using var name

// VALUE = FUNCTION
// using functions as values
const addResult2 =  addition();