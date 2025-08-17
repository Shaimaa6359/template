// document.querySelector("h1:contains('Shaimaa')").style.color = "orange";
// ass2
console.log(
  "%cShaimaa",
  "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial"
);
document.getElementById("name").style.cssText =
  "color: blue; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial";
// anther way ass2
document.writeln("<h1>Abdullah</h1>");
document.querySelector("h1").style.color = "orange";

// ass3
console.log(
  "%cShaimaa %cWeb %cSchool",
  "color: red; font-size: 40px;",
  "color: green; font-size: 40px; font-weight: bold;",
  "color: white; font-size: 40px; background-color: blue;"
);
// ass4
// Group
console.group("Group 1");
console.log("message one");
console.log("message two");
console.group("child Group");
console.log("message one");
console.log("message two");
console.group("Grand child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message one");
console.log("message two");
console.group("child Group");
console.log("message one");
console.log("message two");
console.group("Grand child Group");
console.log("message one");
console.log("message two");
console.groupEnd();
// ass5
// table
console.table(["Shaimaa", "Web", "School", "Abdullah", "mentoring"]);
// ass6
console.log("Iam In Console");
document.write("Iam In Page");
