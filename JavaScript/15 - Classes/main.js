// Javascript classes are basically blueprints for creating different objects, they allow to define
// methods and properties 

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
// in this example class car is shown having two properties - name; year
// class is not an objects, instead a template for javascript objects
// contructor is a special keyword of creating a special method to create other objects,
// executed automatically when a new object is created.

// var usage
const honda = new Car('Honda Fit', 2011);

// methods
// class methods are defined in the same way
// always add a contructor()
class demo {
    constructor() {
        // ...
    }
    method1() {
        // ...  
    }
    method2() {
        // ...
    }
}

// example
class Detect {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    age(x) { // can contain parameters same as constructor
        const date = new Date();
        return date.getFullYear();

        this.x = x; // this parameter is ignored just for demo
    }
}

// Class inheritence
// to create class inheritence extends keyword is used
// a class with inheritence inherits methods from another class
class Shop {
    constructor(product, price) {
        this.product = product;
        this.price = price;
    }

    gift() {
        return 'I got a ' + this.product;
    }
}

class Demo extends Shop {
    constructor(product, price, name) {
        super(product);
        super(price);
        this.name = name;
    }
    give() {
        return 'I got you a ' + this.name + '!';
    }
}
// super() method refers to the parent class, calling by this method in the constructor method we call the parent's 
// constructor method and gets access to the parent's properties and methods.
// inheritence is useful for code reusability

// getters
// used to retrieve/'get' the value of an object's property

// setters
// used to set properties

// Gettrs & Setters
// classes allow you to use getters and setters.
// it can be smart to use them for properties.
// keyword: get, set
class Human {
    constructor(organ) {
        this.brain = organ;
    }
    get organ() {
        return this.brain;
    }
    set organ(x) {
        this.brain = x;
    }
}
// basically they allow to control access to an objects property