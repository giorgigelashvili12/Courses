// document - Whole HTML page/document. An object. (DOM)
// Early DOM and simple explanation
// Document Object Model (DOM) - <html> nested tags
// contains main methods

// Highly used ones
// document.querySelector()
// gets first element that is specified with css selector (css code)
document.querySelector();

// document.querySelectorAll()
// gets all elements that are specified with css selector (css code)
document.querySelectorAll();

// docuemnt.getElementById()
// gets all elements from the document with specified id
document.getElementById();

// document.getElementsByClassName()
// returns every element that has a specified class
document.getElementsByClassName()

// document.getElementsByTagName()
// returns every element with a specified tag name
document.getElementsByTagName();

/////////////////////////////////////////////////////

// document.title
// <html> -> <head> -> <title> tag
// changing current title to: 
document.title = 'Modofied Title';

// document.body - Highly Used
// <html> -> <body>
// represents HTML body tag
// Outputting HTML body tag
console.log(document.body);

// document.head
// represents head element of the document
// <html> -> <head>
console.log(document.head);

// document.URL
// return the URL of the document
console.log(document.URL);

// document.cookie
// represents cookies associated with the document
// You can edit delete and read them
console.log(document.cookie);

// document.readyState
// returns the loading status of the document ('loading'/'interactive'/'complete')
console.log(document.readyState);


// Nodes (not yet)