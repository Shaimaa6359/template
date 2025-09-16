/*Number Challenges
 */
let a = 100;
let b = 200.5;
let c = 1e2;
let d = 2.4;
//Find Smallest Number in All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d)));

// Use Variable a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); //10000

//Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(parseInt(d));
// console.log(d.toFixed());

//Use Variable b + d To Get This Values
console.log(); //66.67 =>string
console.log(); //67 =>Number

console.log(b * d);
console.log(b / d);
console.log(b / d - 8 * Math.floor(d) - 1);
console.log(b / d - 8 * Math.floor(d));
/*gpt*/
console.log((b / d).toFixed(2)); // "66.67"
