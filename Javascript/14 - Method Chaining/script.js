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

///////////////////////////////////

let numbers = [1, 2, 3, 4, 5];

let results = 
    numbers.filter(n => n > 2)
    results.map(n => n * 2)
    results.reverse(); 

// numbers.filter(n => n > 2)
// Filters out numbers greater than 2: [3, 4, 5]

// results.map(n => n * 2)
// Multiplies each remaining number by 2: [6, 8, 10]

// results.reverse(); 
// Reverses the order of the array: [10, 8, 6]            