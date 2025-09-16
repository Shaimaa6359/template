/*
switch challenge
*/
let job = "Manager";
let salary = 0;
if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}
console.log(salary);
switch (job) {
  case "Manager":
    console.log((salary = 8000));
    break;
  case "IT":
  case "Support":
    console.log((salary = 6000));
    break;
  case "Developer":
  case "Designer":
    console.log((salary = 7000));
    break;
  default:
    console.log((salary = 4000));
}
// switch (job === "Manager") {
//   case 1:
// job = "Manager";
// console.log((salary = 8000));
// break;
//   case 2:
// job = "IT";
// console.log((salary = 6000));
// break;
//   case 3:
// job = "Support";
// console.log((salary = 6000));
// break;
//   case 4:
// job = "Developer";
// console.log((salary = 7000));
// break;
//   case 5:
// job = "Designer";
// console.log((salary = 7000));
// break;
//   default:
// job = "Unknown";
// console.log((salary = 4000));
// }

/*
If Challenge
*/
let holidays = 9;
let money = 0;
switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
