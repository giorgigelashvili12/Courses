// Constant is a type of a variable, whose value cant be changed once assigned. constant variable should have a value
// it cannot be blank/falsey. Unlice other methods, constant variable can be caps like:
const PI = 3.14;
const SPEED = 16;

// MAIN KEY POINTS
// 1. Reassigment = false
// can't reassign values once assigned.
const name = 'alice';
name = 'alice'; 
// Error

// 2. requiredAssigment = true;
// Value assigment is required!
// const variable;
// error

// Summary
// const keyword is used to declare a constant variable
// it cannot be reassigned
// it cannot be unassigned
// it can be used in the block it is used in (Scope var)