// string methods allow you to manipulate and work with strings.

// length property
// returns the length of a string
let str = 'Hello, World!';
console.log(str.length) // 13
// this property also counts spaces, numbers and symbols

// toUpperCase & toLowerCase properties
// 1. converts given string characters to uppercase
// 2. converts given string characters to lowercase
console.log(str.toUpperCase()); // Output: HELLO, WORLD!
console.log(str.toLowerCase()); // Output: hello, world!

// charAt & charCodeAt
// charAt(index) - returns the character at the specified index
// charCodeAt(index) - Returns the Unicode value of the character at the specified index.
console.log(str.charAt(0)); // Output: H
console.log(str.charCodeAt(0)); // Output: 72 (Unicode value of 'H')

// indexOf & lastIndexOf
// indexOf(substring) - Returns the index of the first occurrence of the 
// specified substring within the string.
// lastIndexOf(substring) - Returns the index of the last occurrence of the
// specified substring within the string.
console.log(str.indexOf("world")); // Output: 7
console.log(str.lastIndexOf("o")); // Output: 8

// slice
// slice(startIndex, endIndex) - extracts a section of a string and returns it
// as a new string.
console.log(str.slice(7)); // Output: world!
console.log(str.slice(0, 5)); // Output: Hello

// substring & substr
// substring(startIndex, endIndex): Similar to slice, but substring does 
// not accept negative indices.
// substr(startIndex, length) - Similar to slice, but the second parameter 
// specifies the length of the extracted part, rather than the end index.
console.log(str.substring(7)); // Output: world!
console.log(str.substr(0, 5)); // Output: Hello

// replace
// replace(searchValue, replaceValue) - replaces a value with another value
// in a string
console.log(str.replace("world", "universe")); // Output: Hello, universe!

// split
// split(reperator) - splits a string into an array of substrings basedon the
// specified seperator.
console.log(str.split(",")); // Output: ["Hello", " world!"]

// trim
// trim - removes whitespace from both ends of a string
let str1 = "   Hello, world!   ";
console.log(str1.trim()); // Output: Hello, world!