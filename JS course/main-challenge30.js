/*
string challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/
let a = "Elzero Web School";
// Include This Methods In Your Solution [slice, charAt]
console.log(a.slice(2, 6)); //zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero
//8 H
console.log(a.charAt(13).toUpperCase().repeat(8));
// return array
console.log(a.split(" ", 1)); //[Elzero]

//Use Only "substr" method + Template Literals In your Solution
console.log(a.substr(0, 6), a.substr(-6)); //Elzero School

//Solution must Be Dynamic And String May Change
console.log(
  a.charAt(0).toLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.substr(-1).toLowerCase()
); //eLZERO WEB SCHOOl
console.log(a.substr()); //eLZERO WEB SCHOOl

// ANS 1 :
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// ANS 2 :
console.log(a.charAt(13).toUpperCase().repeat(8));
// ANS 3 :
console.log(a.substring(0, 6).split());
// ANS 4 :
console.log(a.substr(0, 6), a.substr(11));
// ANS 5 :
console.log(
  a.charAt(0).toLocaleLowerCase() +
    a.substring(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
);
// try
console.log(a.slice(1, -1).toUpperCase());
