// array - a variable like stucture that can hold more than 1 value
let fruit = 'Mango'; // str - stores one value
let fruits = ['Mango', 'Avocado', 'Banana']; // array - stores more than 1 values

console.log(fruits);
// This displays whole array/list of fruits
// BUT to access only one value you do this:
console.log(fruits[0]);
// accessing the first value - Mango
console.log(fruits[1]);
// Now Avocado
console.log(fruits[2]);
// Now Banana
console.log(fruits[3]);
// Now undefined - since there is 3 fruits, fourth is not defined

// To change a value
fruits[1] = 'Apple';
// Now - ['Mango', 'Apple', 'Banana']
// What happened? Changed the second value to Apple

// Array built-in methods/functions

// 1. '.push(value)'
//  pushes/adds element to/in the end of an array
fruits.push('Peach');
// ['Mango', 'Apple', 'Banana', 'Peach']

// 2. '.pop()'
//  removes the last element in a given array
fruits.pop()
// ['Mango', 'Apple', 'Banana']

// 3. '.unshift(value)'
//  will add the entered value in the front of the list
fruits.unshift('Melon');
// ['Melom', 'Mango', 'Apple', 'Banana']

// 4. '.shift()'
//  removes the first element in the list
fruits.shift();
// ['Mango', 'Apple', 'Banana']

// 5. 'givenArray.length'
//  counts the elements in a given array
let fruitsNum = fruits.length;
// console: 3

// 6. 'givenArray.indexOf(value)'
//  finds the index of given value in an array
let fruitIndex = fruits.indexOf('Mango');
// console: 0
// If given value doesn't exist: -1 (meaning the element wasn't found)

// 7. 'array.sort()'
// sorts an array in alphabetical order

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    // returs every element in the list/array
}