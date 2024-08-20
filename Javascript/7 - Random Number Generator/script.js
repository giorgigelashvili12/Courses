// Random Integer between two values
let randomInt = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// Math.random(): This generates a random floating-point number between 0 and 1, 
// meaning it could be 0 but less than 1, such as 0.657

// Math.random() * (10 - 1 + 1): We multiply the random number by 
// (max - min + 1). Here, max is 10 and min is 1. So, 10 - 1 + 1 
// equals 10. This step scales the random number to a range between
//  0 and 10

// Math.floor(Math.random() * (10 - 1 + 1)): Math.floor() rounds down 
// the number to the nearest integer. This ensures you get whole numbers.

// Math.floor(Math.random() * (10 - 1 + 1)) + 1: Adding min (which is 1)
// shifts the range from 0 to 9 to 1 to 10