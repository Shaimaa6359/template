/* 
    Data Types Introduction
     -string
     -number
     -boolean
     -object=array
     -array
     -function
operator=> function بتتعرف على نوع البينات  (dataType) {
    return typeof dataType;
    name => typeof
}
    */
console.log("Shaimaa saad");
console.log(typeof "Shaimaa saad");
console.log(typeof 22);
console.log(typeof 22.5);
console.log(typeof true);
console.log(typeof false);
console.log(typeof { name: "Shaimaa", age: 22, country: "Egypt" });
console.log(typeof [1, 2, 3]); //array
console.log(typeof ["A", "M", "sh"]); //array

console.log(typeof function () {});
console.log(typeof null); //object
console.log(typeof undefined); //undefined
/*
    variables
    syntax(keyword| variable name |assignment operator |value)
    syntax(var|  name |= |"Shaimaa")

    -var declare a variable
    -let declare a block-scoped variable
    -const declare a block-scoped constant
*/
var name = "Shaimaa",
  age = 22,
  country = "Egypt";
console.log(name);
console.log(age);
console.log(country);
console.log(hello);
hello.innerHTML = "abdullah";
// hello.innerHTML =
//   name + " is " + age + " years old and lives in " + country + ".";
//
//________________________________________________________________________________________
/*
    Loosely Typed vs Strongly Typed Languages

    - JavaScript is a loosely typed (or dynamically typed) language.
    - This means you do not have to declare variable types explicitly.
    - The type of a variable can change at runtime.

    Example:
*/
var x = 10; // x is a number
console.log(typeof x); // "number"
x = "Now I'm a string"; // x is now a string
console.log(typeof x); // "string"

/*
    In strongly typed languages (like Java, C#, or TypeScript), you must declare variable types,
    and the type cannot change after declaration.
*/
/*
    identifier=الاسم الخاص للمتغير 
    _,$
    --name conventions and rules
    --reserved words
    JS camelCase
*/
var $myVariable = "Hello, eng.Abdullah!";
