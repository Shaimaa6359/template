/*[48]
loop
- for([1][2][3]) {
    block of code
}
- for (let i = 0; i < 5; i++) {
-   console.log(i);
- } */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
/*
loop
-loop on sequence
*/
let myCars = [1, 2, 3, 4, "BMW", "Volvo", "Mini", 5, 6, 7, "Audi", "Mercedes"];
let Arr = [];

for (let i = 0; i < myCars.length; i++) {
  if (typeof myCars[i] === "string") {
    Arr.push(myCars[i]);
  }
}
console.log(Arr);

// console.log(myCars[0]);
// console.log(myCars[1]);
// console.log(myCars[2]);
// console.log(myCars[3]);
// console.log(myCars[4]);

// for (let i = 0; i < myCars.length; i++) {
//   console.log(i);
//   console.log(myCars[i]);
// }
/*[50]
loop
--nested loop
*/
let myBags = [
  ["Bag1", "Bag2", "Bag3"],
  ["Bag4", "Bag5"],
  ["Bag6", "Bag7", "Bag8", "Bag9"],
];
let colors = ["Red", "Green", "Blue"];

let brandMyBags = ["Gucci", "Prada", "Louis Vuitton"];

for (let i = 0; i < myBags.length; i++) {
  console.log(`# ${myBags[i]}`);
  console.log("-".repeat(20));

  for (let j = 0; j < colors.length; j++) {
    console.log("Colors:");
    console.log(`## ${colors[j]}`);
    console.log("-".repeat(20));
    console.log("Brands:");
    for (let k = 0; k < brandMyBags.length; k++) {
      console.log(`### ${brandMyBags[k]}`);
    }
    console.log("-".repeat(20));
  }
}
/*[51]
loop control
- break=.> stop the loop
- continue=.> skip the current iteration    
- label
*/
let products = [
  "Laptop",
  "Smartphone",
  10,
  20,
  "Tablet",
  "Smartwatch",
  "Headphones",
  199,
  200,
];

let type = ["hp", "apple", "samsung", "xiaomi", "sony"];
mainloop: for (let i = 0; i < products.length; i++) {
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(products[i]);
  nestesloop: for (j = 0; j < type.length; j++) {
    console.log(`"-" ${type[j]}`);
    if (type[j] === "samsung") {
      break mainloop;
    }
  }
}
/*[52]
loop for advanced example
*/
let tools = [
  "Hammer",
  "Screwdriver",
  "Wrench",
  "Pliers",
  "Drill",
  "Saw",
  "Level",
  "Tape Measure",
  "Chisel",
  "File",
];

let i = 0;

for (;;) {
  console.log(tools[i]);
  i += 2;
  if (i === tools.length) {
    break;
  }
}
console.log(i);
/*[53]
 products practice
 */
let scanCeres = [
  "shampoo",
  "conditioner",
  "body wash",
  "face wash",
  "facial scrub",
];
let used = ["hair", "face", "body"];
let showCount = 1;
document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${scanCeres[i]}</h3>`);
  for (let j = 0; j < used.length; j++) {
    document.write(`<p>Used for: ${used.join(", ")}</p>`);
  }
  document.write(`</div>`);
}
/*[54]
loop
-while
*/
let is = 0;
while (is < scanCeres.length) {
  document.write(`<h3>[${is + 1}] ${scanCeres[is]}</h3>`);
  document.write(is);
  is++;
}
/*[55]
loop
 -Do While
*/
let index = 0;
while (false) {}

do {
  console.log(index);
  index++;
} while (false);
console.log(index);
