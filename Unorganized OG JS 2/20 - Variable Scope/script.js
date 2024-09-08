// variable scope = where a variable is recognized and is accessible
// in here local vs global

let x = 3;
// global - declared outside functions and can be used everywhere
func1();

function func1() {
    let x = 1; // local
    console.log(x);
    // local - Declared in functions and can't be used outside them
    // can't take variables from other functions
}

function func2() {
    let x = 2; // local
    console.log(x);
}
// let's say that functions are houses, we live in function 1 and can see
// everything that is declared inside, but we can't see what is declared
// in our neighbors house - function 2, but anything that is declared in the
// global scope isn't found within any houses, which means that we can access
// it in both functions. It's like a person in the streets that both you and your
// neighbor can see. BUT if we have two variables with the same name but are
// declared in different scopes, firstly local variable will be printed, so
// in this example, 1 will be printed. If local variables weren't there, global
// one would be printed instead.