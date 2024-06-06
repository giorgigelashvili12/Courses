// The reduce() method in JavaScript is used to reduce an array to a single 
// value by executing a provided function for each value of the array 
// (from left to right). The return value of the function is stored in 
// an accumulator, which is used in the next iteration.

array.reduce(callback(accumulator, currentValue, index, array), initialValue);

// callback: A function to execute on each element in the array, taking four arguments:
//     accumulator: The accumulated value previously returned in the last invocation of the
//     callback, or initialValue, if supplied.
//     currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the first argument to the first 
// call of the callback. If no initial value is supplied, the first element 
// in the array will be used as the initial accumulator value and callback
//  will start executing from the second element in the array.

// sum of all the elements
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

// Step-by-Step Walkthrough:
// accumulator starts at 0 (the initialValue).
// Add 1 to 0 - accumulator is now 1.
// Add 2 to 1 - accumulator is now 3.
// Add 3 to 3 - accumulator is now 6.
// Add 4 to 6 - accumulator is now 10.
// Add 5 to 10 - accumulator is now 15.

// Counting Properties
const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Bob', 'Alice'];

const nameCount = names.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue]) {
        accumulator[currentValue] = 1;
    } else {
        accumulator[currentValue]++;
    }
    return accumulator;
}, {});

console.log(nameCount); 
// Output: { Alice: 3, Bob: 2, Tiff: 1 }

// Here's what's happening:

// We start with an empty object {} (that's our initialValue).
// For each name in the array, we check if it already exists in our object.
// If it doesn't, we add it with a count of 1.
// If it does, we increase the count by 1.

// Summary
// reduce() helps you combine array elements into a single value.
// You start with an initial value and an accumulator.
// You use a function to process each element in the array and 
// update the accumulator.
// reduce() is versatile and can be used for many tasks, like
// summing numbers, counting items, and finding maximum values.