/*
function
anonymous function
calling named function vs anonymous function
argument to other function
task without name
setTimeout
*/
console.log(sum(10, 20)); //30

function sum(num1, num2) {
  return num1 + num2;
}

let calculator = function (nu1, nu2) {
  return nu1 + nu2;
};
console.log(calculator(10, 20)); //30

function sayHello() {
  console.log("Hello");
}
document.getElementById("show").onclick = sayHello;

document.getElementById("calculate").onclick = function () {
  console.log("hello from working");
  console.log(calculator(10, 20));
};
setTimeout(function () {
  console.log("hello from learning");
}, 2000);

/* [65]
functon
-function inside function
rturn function from function
*/
// EX1
function sayMessage(fName, lName) {
  let message = "Hello";
  return message + " " + fName + " " + lName;
}
console.log(sayMessage("shaimaa", "saad"));
// EX2
function sayMessage(fName, lName) {
  let message = "Hello";
  // nested function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}
console.log(sayMessage("shaimaa", "saad"));
// EX3
function sayMessage(fName, lName) {
  let message = "Hello";
  // nested function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }

  return concatMsg();
}
console.log(sayMessage("shaimaa", "saad"));
// EX4
function sayMessage(fName, lName) {
  let message = "Hello";
  // nested function
  function concatMsg() {
    function getFullName() {
      return ` ${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }

  return concatMsg();
}
console.log(sayMessage("shaimaa", "saad"));

/*[66]
Arrow Function
- Shorter syntax
- Implicit return
- No own 'this' context
*/
let print = (num) => num;
console.log(print(100)); //10

let add = (n1, n2) => n1 + n2; //implicit return
console.log(add(100, 200)); //300
/*[67]
scope
- global scope
- local scope


var
let,const
*/
// global scope
var S = 22;
let X = 10;

function showText() {
  // local scope
  var S = 33;
  let X = 44;
  console.log(S);
  console.log(X);
}
showText();
console.log(S);
console.log(X);
/*[68]
- block scope [if, switch, for]
- function scope
global scope access from everywhere
*/
var x = 10;
if (10 === 10) {
  let x = 40;
  console.log(`from if block ${x}`); //40
  // let x = 40;
}
console.log(`from global ${x}`); //10
// var a = 1;
// let b = 2;
// function show() {
// var a = 3;
// let b = 4;
// console.log(`function - from local ${a}`);
// console.log(`function - from local ${b}`);
// }
// console.log(`from global ${a}`);
// console.log(`from global ${b}`);
// show();

/*[69]
scope 
-- lexical scope
search 
-Execution context
-lexical environment
*/
function parent() {
  let a = 10;
  function child() {
    console.log(a);

    function grand() {
      let b = 20;
      console.log(` from grand ${a}`); //10
      console.log(` from grand ${b}`); //20
    }
    grand();
  }
  child();
}
parent(); //10
// child(); // error not defined
