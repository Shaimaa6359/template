/*
template literals (template strings)
${اي عملية حسابية}
*/
let A = "Malika,";
let B = "Dalida's ";
let C = "Sister";
let D = ",you know her?";
console.log(A + " " + B + " " + C + " " + D);
console.log(`${A}
 ${B} ${C} ${D} ${1 + 2}`);
let bos = `
<div class="container">
  <div class="card">
    <h2>${A}</h2>
    <p>${B} ${C} ${D} ${1 + 1}</p>
  </div>
</div>`;
document.write(bos);
/*
Arithmetic Operators
+ Addition
- Subtraction
* Multiplication
/ Division
** Exponentiation (ES7)
++ Increment[post / pre]
-- Decrement[post / pre]
*/
console.log(10 + 22);
console.log(10 + " shaimaa");
console.log(10 - 22);
console.log(10 - " shaimaa"); //NaN
console.log(10 * 22);
console.log(10 * " shaimaa"); //NaN
console.log(10 / 2);
console.log(10 / " shaimaa"); //NaN
console.log(10 ** 2); // 100
console.log(10 ** 2 + 2); // 102
