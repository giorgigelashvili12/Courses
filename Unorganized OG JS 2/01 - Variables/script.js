// In Javascript, variables are used to store data values. They are like containers
// that hold information that can be referenced and manipulated in a program.

// ჯავასკრიპტში ცვლადები გამოიყენება სხვადასხვა მონაცემის შესანახად. ისინი არიან კონტეინერები
// რომლებიც იკავებენ ინფორმაციას რომელზეც მუშაობა იქნება შესაძლები.

//////////////////////////////////////////////////////////////////////////////

// 1. Variable Declaration
// - To create a variable in javascript, you use keyword: 'var', 'let', or 'const'.

// 1. ცვლადის დეკლარაცია
// - რომ მოვახდინოთ ცვლადის დეკლარაცია, ჩვენ ვიყენებთ keywords - სკვანძო სიტყვებს, როგორიცაა: 'var', 'let', ან 'const'.

var firstVar;
// var: Historically used for variable declaration.
// var: არის ძველი საკვანძო სიტყვა რომელიც გამოიყენება ცვლადის დეკლარაციაში.

//////////////////////////////////////////////////////////////////////////////

let secondVar;
// let: Variables that are declared with 'lt' are mostly recommended.
//      they are defined.
// let: ცვლადები რომლებიც არის შექმნილი 'let' საკვანძო სიტყვით, არის უფრო ახალი და მეტად რეკომენდირებული.

//////////////////////////////////////////////////////////////////////////////

const PI = 3.14;
// const: const declares a constant variable whose value cannot be reassigned.
//        It is block-scoped like 'let', but its value remains fixed once assigned.
// const: const წარმოქმნის კონტანტას, რომლის მნიშვნელობის მოდიფიცირება შეუძლებელია.
//        ის არის იგივე 'let' keyword-ი რომელიც არ იცვლება. ამ keyword-ით იქმნება
//        ისეთი ცვლადები რომლის მოდიფიცირების სურვილი არ გვაქვს.

//////////////////////////////////////////////////////////////////////////////

// 2. Assigning Values
// - After declaring a variable, you can assign a value to it using the assigment operator ('=').

// 2. მნიშვნელობის მინიჭება
// - როდესაც მოხდება ცვლადის დეკლარაცია, შესაძლებელია მნიშვნელობის მინიჭება ამ ოპერატორით '='
firstVar = "Hello World";
secondVar = 20;

// You can also declare and assign value to a variable on one line
// შეგიძლია ერთ ხაზზე მოახდინო დეკლარაცია და მნიშვნელობის მინიჭება
let demo = "Hi!";

demo = "Bye!"
// This is also used for reassigning value
// ასე შეგეძლებათ კონკრეტული ცვლადისთვის მნიშვნელობის შეცვლა

//////////////////////////////////////////////////////////////////////////////

// 3. Data Types
// - Javascript is dynamically typed, which means that variables can hold values of any data type.
//   Common data types include:

// 3. სხვადასხვა ცვლადის მონაცემები არის დინამიური და შეიძლება ჰქონდეს სხვადასხვა მონაცემი

// * Primitve Types * - 'number', 'string', 'boolean', 'null', 'undefined', 'symbol'
// * Reference Types * - 'object', 'array', 'function', 'map', 'date', 'set'

// * პრიმიტიული ტიპები * - 'number', 'string', 'boolean', 'null', 'undefined', 'symbol'
// * რთული სტრუქტურის * - 'object', 'array', 'function', 'map', 'date', 'set'

// პრიმიტიული - მარტივი აგებულების, არ გააჩნია მეთოდები და ატრიბუტები/ფუნქციები
// რთული სტრუქტურის - მათ კიდევ აქვთ მეთოდებიც და ფუნქციებით, შესაძლებელია მოდიფიცირება, დამატება და წაშლა.

//////////////////////////////////////////////////////////////////////////////

// 4. Variable Naming Rules
// - Variable names are case-sensetive, which means that 'age' and 'Age' are different here.
// - They can include letters, digits, underscores('_'), and dollar signs('$'), but
//   must not start with a digit.
// - Avoid using javascript reserved keywords, like 'let', 'const', 'var', 'function' and etc. as variable names.

// 5. ცვლადის დასახელების წესები
// - ცვლადებში ასოების ზომაშიც კი განსხვავებაა, მაგ: 'age' და 'Age' განსხვავდებიან.
// - შეიძლება შეიცავდნენ ასოებს, რიცხვებს, ქვედატირეს და დოლარის ნიშანს, მაგრამ ისინი არ უნდა იწყებოდნენ რიცხვით.
// - არ დაარქვა სახელებს ჯავასკრიპტის საკვანძო სიტყვები (let, const, var, function).

//////////////////////////////////////////////////////////////////////////////

console.log(age); // undefined
// !! - console.log() is a function which allows you to output whatever you put in () in the console.
// !! - console.log() არის ფუნქცია რომელიც გაძლევს უფლებას რომ გამოიტანო ის რაც არის () ჩასმული.


// Values/Types
// Booleans - true, false
// Number - Every number existing.
// String - Everything put in "" or ''
// Null - no value/no object
// Undefined - undefined/non-existent
// Symbol - symbols