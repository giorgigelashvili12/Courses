// in js this is a special keyword that refers to the object that is
// executing the function. The keyword depends on how the function is called

// GLOBAL CONTEXT
// In the global context, this keyword refers to the global object, which is window
// in web browsers and global in Node.js
console.log(this === window);
// true, if is in a browser

// FUNCTION CONTEXT
// in the regular form this keyword depends on how the function is called.
// if the function is called this refers to the global object
function greet() {
    console.log(this == window);
}

greet(); // true

// METHODS
const demo1 = {
    name: 'Gio',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

demo1.greet();

// ARROW FUNCTION
const demo2 = {
    name: 'Gio',
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};

demo2.greet();