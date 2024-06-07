// constructors in js are function used as blueprints for creating objects 
// with specific properties and methods. They are commonly used with the new keyword
// to create multiple instances of similar objects.

// CREATING CONSTRUCTORS
// you can define a constructor function using the function keyword.
// constructor names start with a capital eltter to distiguish them
// from the regular ones.
function Info(name, info) {
    this.name = name;
    this.age = age;
}

// OBJECTS & CONSTRUCTORS
// can create new instances of objects using the new keyword 
const vashingtoni = new Person('JORJ VASHINGTONI', 200);
const shotiko = new Person('SHOTIKO THE SHOTA', 1);

// new KEYWORD
// when you use the new keyword with a constructor function
// it creates a new empty object, sets value of this to
// the newly created object inside the constructor function
// it adds properties and methods to the object using this
// then it returns the newly created object

// CONSTRUCTOR PROPERTIES AND METHODS
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.greet = function() {
        console.log(`Name; ${this.name}, Age: ${this.age}.`);
    };
}

const nitora = new Person('Shokoladis karaqis mefe', 9);
nitora.greet();