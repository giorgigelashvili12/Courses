// In real life objects can be any things like houses cars animals and humans.
// In JSobjects are the same thing. They can have properties (color, name, etc.) 
// and methods (movement for example).

// Car obj example
const car = {
    manufacturer: 'Toyota',
    model: 'Prius',
    color: 'Silver',
    start: () => 'Car has started', // arrow function
    stop: () => 'Car has stopped' // arrow function
}
// car - is an object
// manufacturer, model, color - is object properties
// start, stop - object methods


// Ways Of Creating Array
// Normal way - Object Literal
const person1 = {
    name: 'George',
    surname: 'Peterson',
    age: 24
};

// No spaces/One line object - Object Literal
const person2 = {name: 'Marbel', surname: 'Simpson', age: 67};

// Create empty object and add 4 properties
const person3 = {};

person3.name = 'Peter';
person3.surname = 'Griffin';
person3.age = 37;


// new Keyword
const person4 = new Object();
person4.name = 'John',
person4.surname = 'Pork';
person4.age = 40;

// or
const person5 = new person4('George', 'Washington', 200);

// new - when using new keyword it creates a new object.

// Simplier analogy:
// Imagine you want to build a car, you have a  blueprint (constructor function) and everytime you
// want to build a car, you use this blueprint
// new - Creating new object
// constructor (here person4) - Blueprint

// Analogy as JS code:
// You made a car object that has its own properties and values (car, model, color, etc.)
// To make a new car object in an easy way, you use already made car object as a blueprint
// and create a new car object using the new keyword. Then you can pass it properties and their values.
// new - Creating new object
// constructor (here person4) - Blueprint


// Accessing properties
// can access in two ways

car.manufacturer; // 'Toyota
car.model; // 'Prius'
car.color; // 'SIlver'
car.start(); // 'Car has started' (function/obj method)
car.stop(); // 'Car has stopped' (function/obj method)