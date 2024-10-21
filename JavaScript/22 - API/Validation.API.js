/* <form id="myForm">
  <label for="username">Username (required, 3-15 characters):</label>
  <input type="text" id="username" name="username" required minlength="3" maxlength="15">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="age">Age (must be a number):</label>
  <input type="number" id="age" name="age" min="1" max="100">
  
  <input type="submit" value="Submit">
</form> */
// html validation attributes

// checkValiditiy() - returns true if an input contains data
// setCustomValidity() - sets message property of an input element

// attribute modification
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    console.log('Form is invalid!');
  } else {
    console.log('Form is valid!');
  }
});

// validity - contains boolean properties related to the vality of input
// validationMessage - contains message a browser will display if validity is false
// willValidate - indicates if an input will be validated

// Validity properties
// customError - set to true, if custom validity message is set
// patternMismatch - set to true if an element's value does not match its pattern attribute
// rangeOverflow - set to true, if an element's value is greater than its max attribute
// rangeUnderflow - paralel
// stepMismatch - set to true if an element value is invalid per its step attribute
// tooLong - set to true if value > max
// valid - set to true if input is valid