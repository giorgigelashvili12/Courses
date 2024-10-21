// SJON (JS Object Notation)
// SJON is a simple data format that is easy to read and write, basically used to transmit data between servers, webs or applications

// simple sjon
// {
//     "name": "John Doe",
//     "age": 30,
//     "isStudent": false,
//     "courses": ["Math", "Science", "History"],
//     "address": {
//       "street": "123 Main St",
//       "city": "New York"
//     }
// }

// JSON in JS
// converting json in js
const jsonString = '{"name": "John", "age": 30, "isStudent": false}';
const obj = JSON.parse(jsonString);
// parse() takes a JSON string and returns the js object
obj.name;
obj.age;
obj.isStudent;

// JS into JSON
const person = {
    name: "John Doe",
    age: 30,
    isStudent: false
};

const jsonString1 = JSON.stringify(person);
// stringify() takes a js object and turns it into json string that can be stored and used

// JSON Strict Rules
// Comments not supported
// No funcs or methods, just json strings
// Strict syntax rules