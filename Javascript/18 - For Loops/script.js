// A for loop in JavaScript is a control flow statement that allows code 
// to be executed repeatedly based on a given condition. The for loop is 
// particularly useful when you know beforehand how many times you want 
// to execute a statement or a block of statements. It consists of three
// main parts: initialization, condition, and final expression.
for (initialization; condition; finalExpression) {
    // code block to be executed
}
// initialization: This is executed once before the loop starts. It is 
// typically used to initialize a counter variable.

// condition: This is evaluated before each iteration of the loop. 
// If it returns true, the loop continues. If it returns false, 
// the loop stops.

// finalExpression: This is executed at the end of each loop iteration.
// It is usually used to update the counter variable.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Initialization: let i = 1 initializes the counter variable i to 1.

// Condition: i <= 5 checks if i is less than or equal to 5. If true, 
// the loop body is executed.

// Final Expression: i++ increments the counter variable i by 1 after
// each iteration.

