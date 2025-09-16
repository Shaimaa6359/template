/*
Switch Statement 
Syntax:
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}
*/
let day = 4;

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
  case 4:
    console.log("Wednesday");
    break;
  default:
    document.write("Invalid day");
}
