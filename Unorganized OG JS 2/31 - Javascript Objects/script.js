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
Array.property;
// or
Array[property];

car.manufacturer; // 'Toyota
car.model; // 'Prius'
car.color; // 'SIlver'
car.start(); // 'Car has started' (function/obj method)
car.stop(); // 'Car has stopped' (function/obj method)


// JS METHODS
const person = {
    firstName: "John",
    lastName: "Pork",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
// .this method refers to the person object
// this.firstName = firstName property of person object
// this.lastName = lastName property of person object

// Propery as value
const name1 = person5.name;
// or
const name2 = person4[name];


// Accessing properties and working with them
const simpleInfo = `My name is ${person1.name}, and my surname is ${person1.surname}`;


// Object Methods And Functions
// deleting properties - delete keyword
delete person.age; // deleted person age property
console.log(person);


// Nested Objects
const demoInfo = {
    name: 'Subject-001',
    surname: ' ',
    id: 5115,
    testedOn: {
        corona: true,
        monkeyPox: true,
        fever: true,
        rabies: false
    }
};
// Accessing nested object & its properties
demoInfo.testedOn; // Whole nested object
demoInfo.testedOn.corona; // true
demoInfo.testedOn.monkeyPox; // true
demoInfo.testedOn.fever; // true
demoInfo.testedOn.rabies; // false


// OBJECT CONSTRUCTORS
// - this keyword
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

// - new keyword
const famMem1 = new Person('Bart', 'Simpson', 12);
const famMem2 = new Person('Lisa', 'Simpson', 10);
const famMem3 = new Person('Maggie', 'Simpson', 1);

// contructor function method
function Person1(race, nationality) {
    this.race = race;
    this.nationality = nationality;
    this.fullDetails = () => {
        return `Race is ${this.race}, and Nationality is ${this.nationality}`;
    }
}

// Explicit Function Binding + methods
// Function call(); Function apply();
// They can be used for calling an object or with another as an argument

// call() usage
const fullName = {
    fullName: () => {
        return this.name + ' ' + this.surname;
    }
}

// Return firstname and last name combined
fullName.fullName.call(person1);

// bind() - Function Borrowing
// with this method, an object can borrow a method from another object.
const person6 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName1 = person6.fullName.bind(member);