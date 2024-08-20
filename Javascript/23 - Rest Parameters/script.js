// rest parameters = (...rest) allow a function work with a variable
// number of arguments by bundling them into an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

function fridge(...foods) {
    console.log(foods);
}

const food1 = 'pizza';
const food2 = 'hamburher';
const food3 = 'hotdog';
const food4 = 'fries';

fridge(food1, food2, food3, food4);
// allows output many variables instead of 1 in a list
// if in func console.log(...foods) it would be a string