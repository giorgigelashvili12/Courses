// reduce() function returns a reducer function for each array element

// SYNTAX - same

const numbers = [50, 10];

numbers.reduce(func);

function func(total, num){ return total - num; }