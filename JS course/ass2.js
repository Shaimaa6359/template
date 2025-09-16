// Add Variables Here
let numberOne = 10;
let numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(String(numberOne) + String(numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(`${numberOne} ${numberTwo}`); // Template Literals Way => String

console.log("Add Code Here");
/*
  Normal Concatenate
  20
  10
*/

console.log("Add Code Here");
/*
  Template Literals Way
  20
  10
*/
/*ass2*/
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

/*ass3*/
console.log(
  "I'm In\n" +
    "\\\\\n" +
    "Love \\\\ \"\"\" '''\n" +
    "++ With ++\n" +
    '\\"""\\"""\n' +
    '""JavaScript""'
);

/*ass4*/
let a = 21;
let b = 20;

console.log(`_${a}_` + `${b}${a}_`.repeat(3) + `${b}_`); // _21_2021_2021_2021_20_
