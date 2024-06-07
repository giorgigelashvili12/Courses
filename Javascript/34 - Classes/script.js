// in js classes are a way to create objects based on a blueprint.
// they provide a more structored and a familiar syntax for creating
// objects and working with inhertitance.

// DEFINING A CLASS
// you can create a class using the class keyword followed by the class name
// inside the classm you can define propertes and methods.
class Person {
    constrcutor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// OBJECTS FROM A CLASS
// can create new instances of objects using the new keyword followed
// by a class name
const jorjika = new Person('Jorjika', 69);

// CONSTRUCTOR METHOD
// the constructor method is a special method used for initaizing
// objects created with a class. It is called automatically when a new
// instance of the class is created
class Person1 {
    constrcutor(name, age) {
        this.name = name;
        this.age = age;
    }
}