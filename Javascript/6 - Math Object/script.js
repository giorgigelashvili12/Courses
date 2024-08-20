// math objects in javascript are built-in object functions that that has methods and properties which 
// for mathematical constants and functions

// Common Math property
console.log(Math.PI); // 3.141592653589793
// 'Math.PI' returns PI - 3.141592653589793

////////////////////////////////////////////////////////////////////
// 1. Rounding Methods
// Math.round(x) - Returns the value of x rounded to the nearest integer
console.log(Math.round(4.7)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil(x) - Returns the smallest integer greater than or equal to x
console.log(Math.ceil(4.1)); // 5

// Math.floor(x) - Returns the largest integer less than or equal to x
console.log(Math.floor(4.9)); // 4;

/////////////////////////////////////////////////////////////////////
// 2. Absolute Value
// Math.abs(x) - Returns the absolute value of x
console.log(Math.abs(-5)); // 5

/////////////////////////////////////////////////////////////////////
// 3. Power & Roots
// Math.pow(base, exponent): Returns the base to the exponent power 
console.log(Math.pow(2, 3)); // 8

// Math.sqrt(x): Returns the square root of x
console.log(Math.sqrt(16)); // 4

/////////////////////////////////////////////////////////////////////
// 4. Trigonometric Functions
// Math.sin(x): Returns the sine of x
console.log(Math.sin(Math.PI / 2)) // 1

// Math.cos(x): Returns the cosine of x
console.log(Math.sin(0)) // 1

// Math.tan(x): Returns the tangent of x
console.log(Math.tan(Math.PI / 4)) // 1

////////////////////////////////////////////////////////////////////
// 5. Minimum and Maximum
// Math.min(a, b, c, ...): Returns the smallest of the zero or more numbers given as input parameters
console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

// Math.max(a, b, c, ...): Returns the largest of the zero or more numbers given as input parameters
console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// 6. Random Number
// generated a random number
console.log(Math.random()); // example: 0.123456789