// The strict equality operator (===) checks if the values and types
// of two operands are exactly the same.
let a = 5;
let b = 5;
let c = '5';

console.log(a === b); // true (both value and type are the same)
console.log(a === c); // false (value is the same but type is different)

// strict inequality
// The strict inequality operator (!==) checks if the values or the types 
// of two operands are not the same.
a = 5;
b = 5;
c = '5';

console.log(a !== b); // false (both value and type are the same)
console.log(a !== c); // true (value is the same but type is different)

// loose equality
// checks if two values are equal
console.log(5 == '5'); // true (string '5' is coerced to number 5)
console.log(null == undefined); // true (both are considered equal in loose equality)
console.log([] == false); // true (empty array is coerced to false)
console.log('' == 0); // true (empty string is coerced to 0)