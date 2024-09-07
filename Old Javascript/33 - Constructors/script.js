// Constructors:
// !!! If you read '31 - JS Objects', '32 - THIS' then its completely same content

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// - this keyword
// this keyword - refers to an object depending on how its used.

// this in object
const person = {
    name: 'Homer',
    surname: 'Simpson',
    age: 40,
    introduction: () => {
        return `Hello, I'm ${this.name} ${this.surname}. I'm ${this.age}.`;
    }
}

// strict mode/global this
const x = this;
// Refers to global object

// this in a function (default usage)
function func() {
    return this;
    // binding for global object
    // in browser global object is [object Window]
}
// in strict mode this is undefined

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// contructor function method
function Person1(race, nationality) {
    this.race = race;
    this.nationality = nationality;
    this.fullDetails = () => {
        return `Race is ${this.race}, and Nationality is ${this.nationality}`;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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