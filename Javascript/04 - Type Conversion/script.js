// Javascript automatically performs type conversation, that converts value 
// in different values.
// ჯავასცრიპტი აუტომატიურად ასრულებს მონაცემის გადაყვანას, რომელიც
// ცვლის ერთ მონაცემს მეორეში

////////////////////////////////////////////////////////////////////////////

// 1. Chaning value to string
// for this you can use the 'String()' function or the '.toString()'
// 1. სტრინგის სახით გადაყვანა
// ამის შესასრულებლად გამოიყენება 'String()' ფუნქცია ან '.toString()'
let num = 10
let str = String(num);
console.log(typeof(num)); // result: 10 - შედეგი: 10

// typeof() - this function returns a value of the entered variable/text in the parentethes
// typeof() - ეს ფუნქცია აბრუნებს შეტანილი მონაცემის კლასს
console.log(typeof(str)); // result: "10"

////////////////////////////////////////////////////////////////////////////

// 2. Changing value to an integer/number
// 2. ინტეჯერის სახით გადაყვანა
let strNum = "10";
let strConversation = Number(strNum);
// changes 10 to "10"
let strConversation2 = parseInt(strNum);
// Or you could use both Number() and parseInt()
let strConversation3 = parseFloat(strNum);
// changes 10 to 10.0 - whole number

////////////////////////////////////////////////////////////////////////////

// 3. Boolean Conversation
// 3. ბულიანში გადაყვანა
let boolConversation = Boolean(strNum)
console.log(boolConversation);
// Result is true, because 10 = 10

// 4. Num to Bool
let zero = 0;
let bool = Boolean(zero); // false (0 is falsy)
console.log(bool);