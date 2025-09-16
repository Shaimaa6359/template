/*
Random Arguments Function Challenge#063
- Create a function that accepts a random number of arguments.
- The function should return the sum of all the arguments.
- If no arguments are provided, it should return 0.
- Use the rest parameter syntax to handle the arguments.
*/
function sumAll(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15
console.log(sumAll()); // 0
/*
function - random random argument challenge
===========================================
create function showDetails
function accept 3 parameters [a,b,c]
- a string [name]
- a number [age]
- a boolean [status]
argument is random
data is not sorted output depend on data types
use ternary conditional operator
 */
function showDetails(name, age, status) {
  for (let i = 0; i < arguments.length; i++) {
    let a, b, c;
    for (let i = 0; i < arguments.length; i++) {
      typeof arguments[i] === "string"
        ? (a = arguments[i])
        : typeof arguments[i] === "number"
        ? (b = arguments[i])
        : (c = arguments[i]);
    }
    console.log(
      `Hello ${a}, your age is ${b}, you are ${
        c === true ? "available" : "not available"
      } for hire.`
    );
  }
}

showDetails("shaimaa", 25, true);
showDetails(25, true, "shaimaa");
showDetails("shaimaa", true, 25);
showDetails(false, 25, "shaimaa");
