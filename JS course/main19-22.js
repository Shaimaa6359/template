/*
- +unary plus [return number if its not number]
- -unary negation[return number if not number + negates it]
tests 
-normal number 
-string number 
-hexadecimal number
-string negative number
string text
-null -false 
-true
*/
console.log(+100);
console.log("100");
console.log(+"100");
console.log(+"-100");
console.log(+"Abdullah");
console.log(+"10.5");
console.log(+false);
console.log(+true);
console.log(+null);
console.log(+0xff);
console.log(-100);
console.log("100");
console.log(-"100");
console.log(-"-100");
console.log(-"Abdullah");
console.log(-"10.5");
console.log(-false);
console.log(-true);
console.log(-null);
console.log(-0xff);
/*
type coercion(type casting)
- +
- -
- ""-2=0-2
-false -true=0-1
*/
let a = "10";
let b = 2;
let c = true;
console.log(a + b); // "102 string"
console.log(b + c); // 3 number
console.log(+a + b); // 12 number
console.log(+a + b + c); // 12 number
console.log(Number(a) + b); // 12 number
console.log(a - b); // "8 string"
console.log(a - c); // 9 number
console.log("" - 2); // -2 number
console.log(""); // 0 number
console.log(0 - 2); // -2 number

console.log(false - true); // -1 number
/*assignment operators
- =
- +=
- -=
- *=
- /=
- %=
- **=
- &=
- |=
- ^=
- <<=
- >>=
- >>>=
*/
let A = 5;
A = A + 3;
A += 3; // A = A + 3
A -= 2; // A = A - 2
A /= 3;
A *= 2;
A **= 2;
console.log(A); // 8
