// In JavaScript, the map() method is a powerful and commonly used array 
// method that creates a new array populated with the results of calling 
// a provided function on every element in the calling array. Here's 
// a comprehensive overview of how to use map()

// Syntax
let newArray = array.map(function(currentValue, index, array) {
    // Return element for newArray
});

// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array map was called upon.

// Usage
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
///////////////////////////////////////////////////////////////////////////
const numbers = [1, 2, 3, 4, 5];
const indexedMultiplication = numbers.map((num, index) => num * index);

console.log(indexedMultiplication); // [0, 2, 6, 12, 20]

// Mapping an Array of Objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
  
const names = users.map(user => user.name);
  
console.log(names); // ['Alice', 'Bob', 'Charlie']