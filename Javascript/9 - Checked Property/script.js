let check = document.getElementById('checkbox');
// document.getElementById(' ');
// 'document' - This object represents the entire HTML document that is loaded
// in the browser. It is the root node of the HTML document and provides methods
// and properties for manipulating its content.

// '.getElementById()' - this method is built-in javascript method that belongs 
// to the 'document' object. It is used to find and HTML element by its id attribute.

// ' ' - This is the id that is put in strings between the braces. It gives you
// the access to the element with this id. 

if (checkbox.checked) {
    console.log("The checkbox is checked.");
    // in this condition, we find if our checkbox is checked.
    // if so, console log 'The checkbox is checked'
} else {
    console.log("The checkbox is not checked.");
    // in this statement, if the first condition is false, it's blocked
    // and now this condition runs.
}