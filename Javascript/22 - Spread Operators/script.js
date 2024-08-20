// spread operator = ... alows an iterable such as an array or string to be
// expanded into seperate elements
let nums = [1, 2, 3, 4, 5];
let maximum = Math.max(...nums)
// find the maximum number (unpacks the elements)
let minimum = Math.min(...nums)

////////////////////////////////////////////////////////////
let username = "user";
let letters = [...username];
// unpacks the letters, ['u', 's', 'e', 'r']

letters = [...username].join('-');
// now a whole string with - after every letter