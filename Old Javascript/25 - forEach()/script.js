// forEach - This is a method available on javascript arrays that allows you
// to execute provided function once for each array element. It's often used for
// iterating over array elements without creating a new array.

// forEach() calls a function for each element in an array

// SYNTAX
Array.forEach(functionn(currentValue, index, array), thisValue);
// selected array
// forEach() - Function
// function() - Requiered function to run for each array
// cuurentValue - Value of current index: Required
// index - index of current element: Optional
// array - array of the current element: Optional

// Examples
// Find the sum of an array
let sum = 0;
let numbers = [2, 5, 6];
numbers.forEach(calculateSum);

function calculateSum(num) {
    sum += num;
}

// Multiply every element (all 3 conditions)
const number = [2, 3, 5];
number.forEach(calculateProduct);

function calculateProduct(num, index, arr) {
    arr[index] = num * 10;
}