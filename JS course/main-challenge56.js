let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

let adminsCount = 0;
let Arr = [];
console.log(myEmployees.sort());
for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }
  Arr.push(myAdmins[i]);
  console.log(myAdmins[i]);
  adminsCount++;
}
document.write(`<div>We Have X Admins</div>`);
document.write(`<div>We Have ${adminsCount} Admins</div>`);
document.write(`<hr>`);
for (let i = 0; i < Arr.length; i++) {
  document.write(`<div>`);
  document.write(`The Admin For Team ${i + 1} Is ${Arr[i]}`);
  document.write(`<h3>Team Members:</h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].startsWith(Arr[i][0])) {
      document.write(`<p> -${j + 1} ${myEmployees[j]}</p>`);
      // myEmployees.splice(j, 1);
      // j--;
    }
  }

  document.write(`</div>`);
  document.write(`<hr>`);
}
