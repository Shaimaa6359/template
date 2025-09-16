/*
Higher Order Functions - Challenge

you can use 
- ,
- _
- space
- true => one time only in the code

you cannot use
- numbers
-letters

you must use [filter + map + reduce + your knowledge]
-order is not important
-all in one chain
*/
let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,s,c,h,o,o,l,2,0,z";
let myTry = myString
  .split(",")

  .filter((char) => isNaN(char))
  .map((char) => char.replace("_", " "))
  .reduce((acc, cur) => acc + cur)
  .replace("EE", "E")
  .slice(0, -1);
console.log(myTry);

let myTask = myString
  .split(",")
  .filter((char) => isNaN(char)) // شيل الأرقام
  .map((char) => char.replace("_", " ")) // حوّل "_" لمسافة
  .reduce((acc, cur) => acc + cur) // دمج الكل
  .slice(0, -1) // شيل آخر "z"
  .replace("EE", "E"); // خلّيها "E" واحدة

console.log(myTask); // Elzero Web School

let myTask2 = myString
  .split(",")
  .filter((char) => isNaN(char)) // شيل الأرقام
  .filter((_, index, arr) => index !== arr.length - 1) // شيل آخر عنصر (z)
  .map((char) => (char === "EE" ? "E" : char)) // خلّي EE تبقى E
  .map((char) => (char === "_" ? " " : char)) // حوّل _ لمسافة
  .reduce((acc, cur) => acc + cur); // دمج الكل

console.log(myTask2); // Elzero Web School
