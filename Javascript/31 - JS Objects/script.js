// JS Object is a collection of key-value pairs where keys are unique strings
// or symbols, where a valuae can be of any data-type. Objects are used to represent
// complex data strcutres.

// Creating an object
const info = {
    name: 'Giorgi',
    age: 13,
    city: 'Kutaisi'
};

// ACESSSING OBJECT PROPERTIES
// can access object properties with dot notation, onject.property,
// or with the bracket notation, object['propert']
console.log(info.name); // Console: Giorgi
console.log(info['age']); // Console: 13

// MODIFYING PROPERTIES
// can change or add new properties to the one existing object and its properties
info.name = 'Levani'; 
// Changed the name constructor/modifying (Giorgi -> Levani)
info.gender = 'Male';
// Added a property to an existing project

// NESTED OBJECTS
const address = {
    city: 'Borjomi'
};

const personInfo = {
    name: 'Jorjika',
    address: address
    // adress is adress (the object)
};

// OUTPUTING A PROPERTY
console.log(personInfo.name);
// Console: Jorjika

// OBJ CONSTRUCTORS
// new Object(); constructor
// creates new object
const person = new Object();
person.name = 'Jumberi';
person.age = 40;
person.city = 'Tbilisi';