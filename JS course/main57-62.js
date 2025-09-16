/*[57]
Function
-don't repeat yourself (DRY)
-built-in functions =>like console.log()
-user defined functions => functions created by the user
-syntax +function functionName(parameters) {
    // code to be executed
} +/
 Basic usage:
function greet(name) {
    console.log("Hello, " + name);
}
greet("Alice");
*/
console.log(typeof console.log); //function

function sayHello(username) {
  console.log(`Hello ${username}!`);
}

sayHello("working");
/*
functon advanced example
*/
function greet(name, age) {
  if (age < 20) {
    console.log(`App is Not Suitable for You`);
  } else console.log(`Hello ${name}, you are ${age} years old.`);
}
greet("Boda", 25);
greet("My mentor", 30);
greet("malika", 3);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(1999, 2025, 2020);
/*[59]
function
-return
-Automatic Semicolon Insertion (ASI) [No Line Allowed]
Interruptting
*/
function welcomeUser(name) {
  // console.log(`Welcome, ${name}!`);
  return `Welcome, ${name}!`;
}
// welcomeUser("adaptability");
// console.log(welcomeUser("adaptability"));
let result = welcomeUser("adaptability");
console.log(result);

function calculateSum(a, b) {
  return a + b;
}
let sum = calculateSum(10, 20);
console.log(sum * 2);

function generate(first, last) {
  for (let i = first; i <= last; i++) {
    if (i === 5) {
      return `Interruptting`;
    }
    console.log(i);
  }
}
generate(1, 10);

/*[60]
function
-Default Function Parameters
-function parameters Default [undefined]
-If no value is passed, the parameter is `undefined`
-You can set default values for parameters
-old strategies [condition + logical operator]
-Es6 method [default parameter syntax]
*/
function favoriteWork(user = "shaimaa", work = "learning") {
  // if (work === undefined) {
  // work = "learner";
  // }
  // work = work || "learner"; // true false pattern
  return `My name is ${user} and I Love ${work}`;
}
console.log(favoriteWork());
/*[61]
function
-Rest Parameters
-Only One Allowed
-Must Be Last Element
*/
function displayFruits(...fruits) {
  // console.log(Array.isArray(fruits)); //true
  // return `Fruits: ${fruits.join(", ")}`;
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
}
// console.log(displayFruits("Apple", "Banana", "Orange", "Mango", "Pineapple"));

function calculateTotal(...numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  return `final result is ${s}`;
  // unreachable
}
console.log(calculateTotal(10, 20, 30, 40, 50));

/*function advanced practice
-parameters
-Default
-Rest
-loop
-condition
*/
function createUser(
  name = "Unknown",
  age = 0,
  Ort = "None",
  show = "yes",
  ...skills
) {
  document.write(`<div>`);
  document.write(`Name: ${name} <br>`);
  document.write(`Age: ${age} <br>`);
  document.write(`Hour Rate: ${Ort} <br>`);
  if (show === "yes") {
    if (skills.length > 0) {
      document.write(`<p>Skills: ${skills.join("| ")}</p>`);
      // console.log("show skills");
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    // console.log("don't show skills");
    document.write(`<p>Skills are hidden</p>`);
  }

  document.write(`</div>`);
}
createUser("shaimaa", 25, 30, "no", "JavaScript", "React", "HTML", "CSS");
