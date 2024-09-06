// Method chaining in JavaScript allows you to call multiple methods on 
// the same object consecutively in a single statement. This technique is 
// particularly useful for improving code readability and making the code
// more concise. Method chaining works because many methods return the 
// object they belong to, which allows for successive method calls.

// example
let str = "   Hello, World!   ";

let result = str.trim().toUpperCase().replace("HELLO", "Hi");
// remove all the extra spaces, change characters to capital, replace HELLO to hi (HI)
console.log(result); // "HI, WORLD!"