// callback = a function that is passed as an argument to another function
//
// used to handle asynchronous operations:
// 1. reading a file
// 2. network requests
// 3. interacting with databases

hello(goodbye);
// a callback

function hello(callback) {
    setTimeout(function () {
        console.log('hello');
    }, 3000)
    // console hello after 3 seconds
    callback(); // call the callback func
}

function goodbye() {
    console.log('goodbye')
}