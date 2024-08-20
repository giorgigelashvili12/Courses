// A while loop in JavaScript is a control flow statement that allows code
// to be executed repeatedly based on a given Boolean condition. The 
// loop runs as long as the condition evaluates to true. 
// The condition is checked before the loop body is executed,
// making it a pre-test loop.
while (condition) {
    // code block to be executed
}

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
// loop that outputs number from 1 to 5
// variable i is initalized to 1
// i <= 5 condition is checked. if true then code can be executed
// inside the loop i is printed
// i is incremented by one
// this process repeats until i will be bigger than 5 and condition will no longer be true

// infinite loop
i = 0;

while (true) {
    console.log(i);
    i++;

    if (i === 10) {
        break; // Exit the loop when i reaches 10
    }
}
// since the condition is true, it will continue infinetly
// but if statement doesnt allow it to do so