// Logical operators in JavaScript are used to perform logical 
// operations on values and return a Boolean result. These 
// operators are commonly used in control flow statements such 
// as if, while, and for loops, and they help in making decisions
// based on certain conditions. Here are the main logical 
// operators in JavaScript:
// Logical AND (&&)
// Logical OR (||)
// Logical NOT (!)
// Nullish Coalescing

// AND (&&) operators if both operands are true or false.
// returns true if 
let a = true;
let b = false;

console.log(a && b); // false

let x = 5;
console.log(x > 0 && x < 10); // true

// OR (||) operator
// returns true if atleast one operand is true
a = true;
b = false;

console.log(a || b); // true

x = 5;
console.log(x < 0 || x > 10); // false

// NOT (!) operators
// negates the value: true to false and false to true
a = true;
console.log(!a); // false

b = false;
console.log(!b); // true

x = 5;
console.log(!(x > 0)); // false

// Nullish Coalescing (??)
// The nullish coalescing operator (??) returns the right-hand operand 
// when the left-hand operand is null or undefined, and otherwise 
// returns the left-hand operand. This operator is useful for
// providing default values when dealing with null or undefined
a = null;
b = "default value";

let result = a ?? b;
console.log(result); // "default value"

x = 0;
let y = x ?? 10; // 0 is not null or undefined, so x is used
console.log(y); // 0

///////////////////////////////////////////////////////
// Examples

// Checking Multiple Conditions
let age = 25;
let hasDrivingLicense = true;

if (age >= 18 && hasDrivingLicense) {
  console.log("You can drive.");
} else {
  console.log("You cannot drive.");
}

// Default Values
let userInput;
let defaultValue = "Default";

result = userInput || defaultValue;
console.log(result); // "Default"

// NOT validation
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in.");
}

// combining operators
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}