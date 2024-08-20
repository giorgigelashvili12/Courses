// In Javascript, variables are used to store data values. They are like containers
// that hold information that can be referenced and manipulated in a program.
// These are how variables work in javascript:

// 1. Variable Declaration
// - To create a variable in javascript, you use keyword: 'var', 'let', or 'const'.
var firstVar;
// var: Historically used for variable declaration. Variables declared with 'var' have
//      function scope or global scope depending on where they are declared (Global/Local Variables)
let secondVar;
// let: Variables that are declared with 'lt' aee limited to the block in which
//      they are defined.
const PI = 3.14;
// const: const declares a constant variable whose value cannot be reassigned.
//        It is block-scoped like 'let', but its value remains fixed once assigned.

// 2. Assigning Values
// - After declaring a variable, you can assign a value to it using the assigment operator ('=').
firstVar = "Hello World";
secondVar = 20;
// You can also declare and assign value to a variable on one line
let demo = "Hi!";
demo = "Bye!"
// This is also used for reassigning value

// 3. Data Types
// - Javascript is dynamically typed, which means that variables can hold values of any data type.
//   Common data types include:
// * Primitve Types * - 'number', 'string', 'boolean', 'null', 'undefined', 'symbol'
// * Reference Types * - 'object', 'array', 'function'

// 4. Variable Naming Rules
// - Variable names are case-sensetive, which means that 'age' and 'Age' are different here.
// - They can include letters, digits, underscores('_'), and dollar signs('$'), but
//   must not start with a digit.
// - Avoid using javascript reserved keywords, like 'let', 'const', 'var', 'function' and etc. as variable names.

// 5. Scope
// - Variables in Javascript have function-level scope when declared with 'var' and block-level scope
//   when declared with 'let' or 'const'.
// Since we dont know functions and if statements yet, I will avoid function and block scope.

// *Hoisting* 
// In javascript, variables declared with 'var' are hoisted to the top of their scope
// during compilation, which means you can use the variable before it is declared in the code. 
// However, the variable will be initialized with 'undefined' until its actual assigment in the code.
console.log(age); // undefined
// !! - console.log() is a function which allows you to output whatever you put in () in the console.
var age = 20;

// CONCLUSION - Variables are fundamental building blocks in javascript, enabling you to
//              store, retrieve, and manipulate data dynamically within your programs.

// Values/Types
// Booleans - true, false
// Number - Every number existing.
// String - Everything put in "" or ''
// Null - no value/no object
// Undefined - undefined/non-existent
// Symbol - symbols