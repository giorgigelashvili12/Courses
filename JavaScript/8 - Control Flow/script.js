// Control Flow & Mechanisms
// Control flow refers to individual statements and statements

// Sequential
let a = 5;
let b = 7;
let result = a + b;
console.log(result);
// result: 12

// Statements
// if + if...else + if...else...else if statement
const age = 19;

if(age < 18) {
    // expression
    console.log('Not allowed');
} else {
    console.log('Allowed');
}

// switch statement
// clean and easy version of if..else statements
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You chose an apple.");
        break;
    case "banana":
        console.log("You chose a banana.");
        break;
    default:
        console.log("Unknown fruit.");
}

// for loops
for (let i = 0; i < 5; i++) {
    console.log(i);  // Outputs 0, 1, 2, 3, 4
}

// while loop
let i = 0;

while (i < 5) { // while statements = true
    console.log(i);
    i++;
}

// Array iteration
let person = { name: "Alice", age: 25 };

for (let key in person) {
    console.log(`${key}: ${person[key]}`);  // Outputs "name: Alice", "age: 25"
}

// Exception handling
try {
    // Code that may throw an error
    let result = riskyFunction();
} catch (error) {
    // Code to handle the error
    console.log("Error occurred:", error.message);
} finally {
    // Code that will always execute, regardless of the outcome
    console.log("Cleanup or final steps.");
}