// Switch statements are used in javascript to execute one block of code 
// among many options based on the value of an expression. they can be seen 
// as else-if statements.

switch (expression) {
    case value1:
        // Code to be executed if expression == value1
        break;
    case value2:
        // Code to be executed if expression == value2
        break;
    // Additional cases here
    default:
        // Code to be executed if expression does not match any case
}

// break methods is used to end the project if this condition is false.
// (preventing the program to continue)

// Heres a basic example/project
let day = new Date().getDay(); // Get the current day as a number (0-6)

switch (day) {
    case 0:
        console.log("Today is Sunday.");
        break;
    case 1:
        console.log("Today is Monday.");
        break;
    case 2:
        console.log("Today is Tuesday.");
        break;
    case 3:
        console.log("Today is Wednesday.");
        break;
    case 4:
        console.log("Today is Thursday.");
        break;
    case 5:
        console.log("Today is Friday.");
        break;
    case 6:
        console.log("Today is Saturday.");
        break;
    default:
        console.log("Invalid day.");
}