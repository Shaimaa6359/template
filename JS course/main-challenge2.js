/* challenge 1*/
let a = 10;
let b = "20";
let c = 80;
// console.log(++a);
// console.log(+b++);
// console.log(+c++);
// console.log(+a++);
console.log(++a + +b++ + +c++ - +a++);
console.log(a);
console.log(b);
console.log(c);

/*
[++a]
value=11
explain: add 1 to a=> a=a+1 pre-increment
[+]
addition
explain: operation
[+b++]
value =20
explain:unary plus return num and increment post
[+]
addition
explain: operation
[+c++]
value = 80
explain: unary plus return num and increment post
[-]
subtraction
explain: operation
[+a++]
value = 10
explain: unary plus return num and increment post
*/
console.log(++a + -b + +c++ - -a++ + +a); // 100
/*
++a=13,-b=-21, +c++=81, -a++=-13,+a=14
*/
console.log(a);
console.log(b);
console.log(c);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); //100
/*--c=81,+b=21,--a=13,+b++=21,+b=22,a=13,--a=12,+true=1
/*challenge 2*/
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d);
console.log(2 * +e);
console.log(-d * +e); //2000
console.log(3 * +g);
console.log(-d + 2 * +e + f + 3 * +g); //173
