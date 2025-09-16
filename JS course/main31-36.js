/*[31]
comparison operators
- == equal =>compare value only
- != not equal =>compare value only

- === equal and type =>compare value and type
- !== not equal and type =>compare value and type

- > greater than
- >= greater than or equal
- < less than
- <= less than or equal
*/
console.log(10 == "10"); //true
console.log(10 != "10"); //false

console.log(10 === "10"); //false
console.log("Abdullah" === "Shaimaa"); //false
console.log(typeof "Abdullah" === typeof "Shaimaa"); //true
console.log("Abdullah" === "Shaimaa"); //false
console.log(typeof "122" === typeof "10"); //true

console.log(10 !== "10"); //true
console.log(10 > 5); //true
console.log(10 >= 10); //true
console.log(10 < 15); //true
console.log(10 <= 10); //true
/*[32]
logical operators
- && and
- || or =.|pipeline
- ! not
*/
console.log(10 == "10" && 10 > 5 && 10 >= 10); //true
console.log(10 == "10" && 10 > 5 && 10 > 10); //false

console.log(10 == "10" || 10 > 5 || 10 > 10); //true
console.log(10 === "10" || -10 > 5 || 10 > 10); //false

console.log(true); //true
console.log(false); //false
console.log(!true); //false
console.log(!false); //true
/*
control flow
- if
- else
- else if
- switch
*/
let price = 100;
let discount = 20;
let finalPrice = price - discount;
let student = false;

if (student === true) {
  finalPrice -= finalPrice;
}
console.log(finalPrice);
/*[34]
Nested If=> معنها حاجة جو جاجة 
condition inside condition
*/
let Price = 100;
let Discount = false;
let DiscountAmount = 22;
let country = "EG";
let Student = true;
if (Discount === true) {
  Price -= DiscountAmount;
} else if (country === "EG") {
  if (Student === true) {
    Price -= 50;
  } else {
    Price -= 25;
  }
} else {
  Price -= 15;
}
console.log(Price);
/*
conditional (ternary) operator
- syntax: condition ? expr1 : expr2
- if condition is true, expr1 is executed, otherwise expr2 is executed
الاف المختصرة
*/
let theName = "Abdullah";
let theGender = "Male";
let theAge = 26;

if (theGender === "Male") {
  console.log("Hello Mr. " + theName);
} else {
  console.log("Hello Ms. " + theName);
}
// condition ? If True : If False
theAge === 18 ? console.log("Adult") : console.log("Minor");

theGender === "Male" ? "Hello Mr. " + theName : "Hello Ms. " + theName;
let result =
  theGender === "Male" ? "Hello Mr. " + theName : "Hello Ms. " + theName;
document.write(result);
console.log(result);
console.log(
  theGender === "Male" ? "Hello Mr. " + theName : "Hello Ms. " + theName
);
console.log(`Hello ${theGender === "Male" ? "Mr." : "Ms."} ${theName}`);

theAge < 25
  ? console.log("Young")
  : theAge > 25 && theAge < 60
  ? console.log("25 to 60")
  : theAge > 60
  ? console.log("Old")
  : console.log("Unknown");
/*[36]
  Logical or ||
  --Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
  (a ?? b) => a if not null/undefined else b
  --null + undefined
  */
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
let a = null;
console.log(`the price is ${a || 200}`);
console.log(`the price is ${a && 200}`);
