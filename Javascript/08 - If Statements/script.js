// If statement is used to perform different actions based on different conditions. 

if (condition) {
    // code to be executed if the condition is true
    console.log('Hello World!');
}

// Example
let number = 9;

if (number > 6) {
    console.log('The number is greater than 5');
}

// Else-if statement
let num = 3;

if (num > 5) {
    console.log("The number is greater than 5");
} else {
    console.log("The number is not greater than 5");
}
// Here, if the first condition is false then hop onto the next one, else given here.

// If-Else and Else-If statement
// What if I need to do multiple conditions?
if (number > 5) {
    console.log("The number is greater than 5");
} else if (number == 5) {
    console.log("The number is exactly 5");
} else {
    console.log("The number is less than 5");
}
// This example includes an else if condition to check if the number is
// exactly 5. If none of the conditions are true, the code inside the 
// else block will run.

// This is how you can use to perform different actions using the if statement