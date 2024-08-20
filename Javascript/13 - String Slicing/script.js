// string sliing also known as substring extraction is the process of extracting
// a portion of a string based on specified indices. 

// substring
// can specify both start and end indices
let str = "Hello, world!";
let slicedStr = str.substring(7); // Extracts from index 7 to the end
console.log(slicedStr); // Output: "world!"

let slicedStr1 = str.substring(0, 5); // Extracts from index 0 to 4 (5 excluded)
console.log(slicedStr); // Output: "Hello"

// slice
// 
let slicedStr2 = str.slice(7); // Extracts from index 7 to the end
console.log(slicedStr); // Output: "world!"

let slicedStr3 = str.slice(0, 5); // Extracts from index 0 to 4 (5 excluded)
console.log(slicedStr); // Output: "Hello"

// substr
// The substr() method extracts a part of a string, starting from a 
// specified index and extending for a given number of characters. Note 
// that substr() is considered a legacy function and may not be available 
// in all environments.
// Extract "Hello"
let substr1 = str.substr(0, 5);
console.log(substr1); // "Hello"

// Extract "World"
let substr2 = str.substr(7, 5);
console.log(substr2); // "World"

// Extract "World!" using negative start index
let substr3 = str.substr(-6);
console.log(substr3); // "World!"