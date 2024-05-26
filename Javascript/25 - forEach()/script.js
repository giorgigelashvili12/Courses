// forEach - This is a method available on javascript arrays that allows you
// to execute provided function once for each array element. It's often used for
// iterating over array elements without creating a new array.

// Basic Usage
array.forEach(function(currentValue, index, array) {
    // code
});
// currentValue - the current element being processed in the array
// index - the index of the current element being processed
// array - the array that forEach is called on

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});
// output:
// 1
// 2
// 3
// 4
// 5

// Arrow Function
// can create function with an arrow
numbers.forEach((number) => {
    console.log(number);
});
// output:
// 1
// 2
// 3
// 4
// 5

// accessing index and array
numbers.forEach((number, index) => {
    console.log(`Index: ${index}, Value: ${number}`);
});
  
// Output:
// Index: 0, Value: 1
// Index: 1, Value: 2
// Index: 2, Value: 3
// Index: 3, Value: 4
// Index: 4, Value: 5

// To modify elements
let words = ['one', 'two', 'three'];
words.forEach((word, index, arr) => {
    arr[index] = word.toUpperCase();
});
// ["ONE", "TWO", "THREE"]

