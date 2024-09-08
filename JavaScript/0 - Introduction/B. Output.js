// Javascript has many display possiblities, meaning you can display data in many ways
// 'innerHTML' - Writing data in HTML element
// 'document.write()' - Writing into HTML output
// 'window.alert()' - Outputting data in an alert box (browser)
// 'console.log()' - Outputting data in browser console

// innerHTML
// To access an html element we use 'document.getElementById()' method
// HTML >> '<p id="demo"></p>'
// id defines the HTML element, innerHTML defines HTML property.
// Its a common way of displaying data in html
document.getElementById('firstParagraph').innerHTML = 5 + 6;


// document.write()
// for testing reasons, this is very sueful
document.write('GOA on top');

// window.alert() or alert()
// Outputs data as an alert box message
alert('Hello, World!');
// or
window.alert('Hello, World!');

// console.log()
// Outputs data in the console
console.log('Grdzelos razmi best');
// Most efficient and recommended way for testing and other reasons