// Comprasion values are used to compare different values and in the end to return
// boolean type based on the comprasion results. Used when it comes to logcial
// comprasion and determines equality or the difference between the values

// Equal to (==)
// compares two values and returns true/false:
5 == 3; // false
5 == 5; // true
5 = '5'; // true
// 5 == '5' because JS converts the value to a numerical type

// Strict Equality (===)
// compares value and data type of 2 given variables/values
5 === 3; // false
5 === 5; // true
5 === '5'; // false

// Inequality/Not equal to (!=)
// compares two values and detects if they're not equal to eachother
5 != 3; // true
5 != 5; // false
5 != '5'; // true

// Strict Inequality (!==)
// compares two values and detects if their value or datatype is not equal to eachother
5 !== 3; // true
5 !== 5; // false
5 !== '5'; // true

// Greater Than (>)
// detects which value is greater
5 > 3; // true
5 > 5; // false
5 > '5'; // false

// Less Than (<)
// detects which value is greater
5 < 3; // true
5 < 5; // false
5 < '5'; // false

// greater Than Or Equal To (>=)
// detects if two values are equal to or which one is greater
5 >= 3; // true
5 >= 5; // true
5 >= '5'; // true

// Less Than Or Equal To (<=)
// detects if two values are equal to or which one is greater
5 <= 3; // true
5 <= 5; // true
5 <= '5'; // true