// in js static keyword is used to define static methods and properties 
// within a class. they cna be accessed directly from thr class without
// the need to create an instance.

// STATIC METHODS
// static methods are methods that are called on the class itself, not
// on instances of the class. They are useful for utility functions or operations
// that are not specific to individual instances.
class Mathh {
    static add(x, y) {
        return x + y;
    }

    static minus(x, y) {
        return x - y;
    }
}

console.log(Mathh.add(2, 6));
console.log(Mathh.minus(8, 77));

// STATIC PROPERTIES
// static properties are properties that belong to the class itself.
// rather than to instances of the class. they can be accessed using
// the class name
class Car {
    static wheels = 4;
}

console.log(Car.wheels); // 4
// here wheels is a static property of the Car class.

// When?
// Static methods and properties are used when the functionality or data
// is not specifix to individual instances.

// Benefits
// They provide a convenient way to organize utlity functions
// and shared data within a class.