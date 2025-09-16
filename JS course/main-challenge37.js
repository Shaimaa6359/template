/*
If Condition Challenge
*/
let a = 10;
if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 to 40");
} else if (a > 40) {
  console.log(">40");
} else {
  console.log("unknown");
}
// Write With Ternary If Syntax
a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 to 40")
  : a > 40
  ? console.log(">40")
  : console.log("unknown");

let sh = "Abdullah Web Mentor";
// console.log((sh.length * 2 - 4).toString());
//
if ((sh.length * 2 - 4).toString() === "34") {
  console.log("Good");
}
// console.log(sh.split(" ", 1));
// console.log(sh.substring(0, 8).repeat(2));
// console.log(sh.slice(0, 8).repeat(2));
// W poition may change
if (sh.slice(sh.indexOf("W"), sh.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}

// console.log(sh.indexOf("W"));
// console.log(sh.slice(9, 10));
// console.log(sh.slice(sh.indexOf("W"), sh.indexOf("W") + 1).toLowerCase());
if (typeof (sh.length * 2 - 4).toString() === "string") {
  console.log("Good");
}

// console.log(sh.length);
if (typeof sh.length === "number") {
  console.log("Good");
}
if (sh.substring(0, 8).repeat(2) === "AbdullahAbdullah") {
  console.log("Good");
}

if (typeof Number(sh) !== "string") {
  console.log("Good");
}
// console.log(typeof Number(sh));
// if (typeof Number(sh) === "number") {
//   console.log("Good");
// }
//
