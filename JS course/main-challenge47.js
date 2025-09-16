/*
Array Challenge 47
*/
let zero = 0;
let counter = 3;
let my = ["Ahmad", "mazero", "Elham", "Osama", "Gamal", "Ameer"];

//write your code here
// console.log(my.push("Alaa"));
my.push("Alaa");
console.log(my.slice(zero, my.length - counter).reverse()); //['Osama', 'Elham', 'Mazero', 'Ahmad']

//[ 'Elham', 'Mazero']
// console.log(my.pop());
// console.log(my.shift());
my.pop();
my.shift();
console.log(my.slice(zero, -counter).reverse()); //[ 'Elham', 'Mazero']
// console.log(my);
// console.log(my.length - counter);
// console.log(counter - (my.length - counter));
// console.log(my.length);
// console.log(my.length + (counter - (my.length - counter)));
//
console.log(
  `${
    my[1][zero] +
    my[counter - (my.length - counter)][counter - (my.length - counter)] +
    my[zero].slice(
      my.length - counter,
      my.length + (counter - (my.length - counter))
    )
  }`
);

console.log(
  `${
    my[zero][my.length - (counter - (my.length - counter))] +
    my[zero][my.length].toUpperCase()
  }`
);
