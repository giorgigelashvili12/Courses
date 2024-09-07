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