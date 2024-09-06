// filer() returns a new array filled with elements that 'passed the test' in a function

// SYNTAX - same

// Age filtering program
const ageInputs = [9, 12, 13, 16, 18, 19, 20, 22, 24];

ageInputs.filter(filterAge);

function filterAge(age) {
    return (age >= 18);
}