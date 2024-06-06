// In JavaScript, the filter() method is used to create a new array with 
// all elements that pass a test implemented by the provided function. 
// It's a powerful tool for extracting a subset of elements from an 
// array based on a condition.

// Syntax
let newArray = array.filter(function(currentValue, index, array) {
    // Return true to keep the element, false otherwise
});
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array filter was called upon.

// Using index and array
const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter((num, index) => index % 2 === 0);

console.log(filtered); // [5, 8, 44]

// Array of Objects
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
  
const adults = users.filter(user => user.age >= 30);
  
console.log(adults);
// [
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ]
// this function filters all the elements whiches age value is less than 30

// Complex condition
const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 30, active: false },
    { name: 'Charlie', age: 35, active: true }
];
  
const activeUsers = users.filter(user => user.age > 25 && user.active);
  
console.log(activeUsers);
// [
//   { name: 'Charlie', age: 35, active: true }
// ]
  