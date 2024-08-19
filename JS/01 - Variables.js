// In javascript variables are container that contain different data values. They are like containers that can hold different
// informations. Those informations can be manipulated, meaning you can work with them in different programs.

// Javascript-ში ცვლადები არის მარტივი კონტეინერები რომლებიც იკავებენ სხვადასხვა მონაცემებს. მარტივად: ისინი არიან
// კონტეინერები რომლებიც იკავებენ სხვადასხვა 'ინფორმაციას' რომელზეც შესაძლებელია მუშაობა სხვადასხვა პროგრამებში.

// 1. Declaring A Variable
// To declare/create a variable in Javascript we use different keywords, such as: 'var', 'let', or 'const'

// 1. ცვლადის დეკლარაცია
// რომ შევქმნათ/მოვახდინოთ ცვლადის დეკლარაცია ჩვენ ვიყენებთ სხვადასხვა keyword-ებს, როგორიცაა: 'var', 'let', ან 'const'

// 1. 'var' keyword
// Was used historically. Var stands short for 'variable'
// გამოიყენებოდა ადრე. var შემოკლეიტ ინგლისურად ნიშნავს ცვლადს
var myVar;

// 2. 'let' keyword
// This is 'futuristic' keyword, which is most usend and most likely recommended.
// ეს კი 'თანამედროვე' keyowrd არის, რომელიც არის ყველაზე ხშირად გამოყენებული და რეკომენდირებული.
let myVar1;

// 3. 'const' keyword
// 'const' stands for 'constant'. This keyowrd is unique, because once declared, its value cannot be re-assigned/changed.
// it also can't be empty. 
// 'const' შემოკლებით ნიშნავს კონსტანტას. ეს keyword გამოირჩევა იმით, რომ როდესაც მისი დეკლარირება და მონაცემის
const myVar3 = 0;


// Value Assignment
// once you declare a variable, you can assign different data values to it using the assignment operator ('=')
myVar = 'First Variable';

// OR you can both: declare and assign on one line
let newVar = 'Hello World';

console.log(newVar);
// console.log() - a function which allows you to debug/output anthying that is put between the parentheses in the console. (web-browser)
