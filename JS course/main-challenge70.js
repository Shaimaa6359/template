/*
function arrow challenges
*/
// [1] one statement in function
// [2] convert to arrow function
// [3] print the output [arguments may change]
// let names = function (...names) {
//   return `string [${names.join("], [")}] => Done !`;
// };
// console.log(names("Osama", "Ahmed", "Sayed", "Mahmoud"));

// arrow function
let names = (...names) => `string [${names.join("], [")}] => Done !`;
console.log(names("Osama", "Ahmed", "Sayed", "Mahmoud"));
// string [Osama], [Ahmed], [Sayed], [Mahmoud] => Done !
/*===========================================================*/
// [1] replace ??? in return statement to get the output
// [2] create the same function with regular syntax
// [3] use array inside the arguments to get the output
let myNumbers = [20, 50, 10, 60];
let calc = (one, two, ...nums) => one + two + nums[0];
console.log(calc(10, myNumbers[0], myNumbers[1])); //80

// regular function
function calc1(one, two, ...nums) {
  return one + two + nums[0];
}
console.log(calc(10, myNumbers[0], myNumbers[1])); //80
