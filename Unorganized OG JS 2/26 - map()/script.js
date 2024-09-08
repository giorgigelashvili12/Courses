// map() creates a new array everytime calling a function for every array element
// map() cant change the original array

// SYNTAX
array.map(functionn(currentValue, index, arr), thisValue);
// functionn - requiered function that runs for every array element
// currentValue - The value of the current element: Requiered
// index - The index of the current element: optional
// arr - The array of the current element: optional

// Little Program
const names = [
    {first: 'George', last: 'Washington'},
    {first: 'Obama', last: 'Black'},
    {first: 'Jimmy', last: 'Beast'},
];

names.map(combine);

function combine(arr) {
    return [arr.first, arr.last].join(' ');
}