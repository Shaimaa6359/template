/*[71]
higher order functions
---->is a function that accepts another function as parameter or returns a function as a result
-map
--method creates a new array populated with the results of calling a provided function on every element in the calling array.
--does not change the original array
-filter
--creates a new array with all elements that pass the test implemented by the provided function.
--does not change the original array
-syntax map(callback(currentValue, index, array){}, thisArg)
--element => currentValue
--index => index of current element
--array => the array map was called upon
notes =>map return a new array
Examples 
- Anonymous function
- Named function
- Arrow function
*/
let myNums = [1, 2, 3, 4, 5, 10];
let arr = [];
for (let i = 0; i < myNums.length; i++) {
  arr.push(myNums[i] + myNums[i]);
}
console.log(arr);

// same idea using map
// let addSelf = myNums.map(function (element, index, array) {
// console.log(
//   `Element: ${element} => Index: ${index} => Array: ${array}=> this${this}`
// );
// return element + element;
// }, 100);
// console.log(addSelf);
//
// let addSelf = myNums.map(function (element, index, array) {
// console.log(
// `Element: ${element} => Index: ${index} => Array: ${array}=> this${this}`
//   );
//   return element + element;
// }, 100);
// console.log(addSelf);

// let addSelf = myNums.map((element) => element + element);
// console.log(addSelf);
//
function sum(ele) {
  return ele + ele;
}
let addSelf = myNums.map(sum);
console.log(addSelf);
/*[72]
map
-swap cases
-inverted numbers
-ignore boolean values
*/
// let swappingCases = "elZERo";
// let swapped = swappingCases
//   .split("") //convert string to array
//   .map(function (char) {
// return char === char.toUpperCase()
//   ? char.toLowerCase()
//   : char.toUpperCase();
// if (char === char.toUpperCase()) {
//   return char.toLowerCase();
// } else {
//   return char.toUpperCase();
// }
//   })
//   .join(""); //convert array to string
// console.log(swapped);
let swappingCases = "elZERo";
let swapped = swappingCases
  .split("") //convert string to array
  .map((char) =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  )
  .join(""); //convert array to string
console.log(swapped);
// 2
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let inverted = invertedNumbers.map(function (num) {
//   return -num;
// });
// console.log(inverted);
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let inverted = invertedNumbers.map((num) => -num);
console.log(inverted);
// 3
// let ignoreBooleans = "Elz123er4o";
// let ignore = ignoreBooleans
//   .split("") //convert string to array
//   .map(function (char) {
// return !isNaN(char) ? "" : char;
//   })
//   .join("");
// console.log(ignore);
//
let ignoreBooleans = "Elz123er4o";
let ignore = ignoreBooleans
  .split("") //convert string to array
  .map((char) => (!isNaN(char) ? "" : char))
  .join("");
console.log(ignore);
/*[73]
filter
--method creates a new array with all elements that pass the test implemented by the provided function.
--does not change the original array
-syntax filter(callback(currentValue, index, array){}, thisArg)
--filter out the non-unique values
--filter out the unique values
*/
// get friends with name starts with A
let friends = ["Ahmed", "Sayed", "Ali", "Osama", "Ameer", "Anas"];
// using map
let fris = friends.map(function (name) {
  return name.startsWith("A") ? name : "";
});
console.log(fris);
// using filter
let friss = friends.filter(function (name) {
  return name.startsWith("A");
});
console.log(friss);

// get even numbers only
let numbers = [11, 20, 2, 5, 17, 10];
// using map
let evenNumbersMap = numbers.map(function (num) {
  return num % 2 === 0 ? num : "";
});
console.log(evenNumbersMap);
// using filter
let evenNumbersFilter = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbersFilter);

/*[74]
filter
filter longest word by number of characters
*/
// filter words more than 4 characters

let sentence = "I love programming more than any thing else";
// using filter
let longWords = sentence
  .split(" ")
  .filter(function (word) {
    return word.length <= 4;
  })
  .join(" ");
console.log(longWords);
// using map
let returnLength = sentence
  .split(" ")
  .map(function (lWord) {
    return lWord.length <= 4 ? lWord : "";
  })
  .join(" ");
console.log(returnLength);

// ignore numbers
let ignoreNumbers = "I love 4 programming 5 more than any thing else";
let noNumbers = ignoreNumbers
  .split(" ")
  .filter((word) => !isNaN(word))
  .map(function (word) {
    return word * word;
  })
  .join(" ");
console.log(noNumbers);
/*[75]
reduce
--method executes a reducer function on each element of the array,
--resulting in a single output value.
syntax 
reduce(callBackFunc(Accumulator, currentval, current index, source array){}, initialvalue)
Accumulator=> the accumulated value previously

 */
let nums = [10, 20, 15, 30];
let add = nums.reduce(function (acc, current, index, arr) {
  console.log(`acc=> ${acc}`);
  console.log(`current element=> ${current}`);
  console.log(`current element index=> ${index}`);
  console.log(`array=> ${arr}`);
  console.log(acc + current);
  console.log("#".repeat(18));
  return acc + current;
}, 5);
console.log(add);
/*
reduce
-longest word
-Remove Characters + use Reduce
*/
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
let check = theBiggest.reduce(function (acc, current) {
  console.log(`acc=> ${acc}`);
  console.log(`current element=> ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log("#".repeat(18));
  return acc.length > current.length ? acc : current;
});
console.log(check);

let removeChars = ["E", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];
let finalString = removeChars
  .filter(function (ele) {
    return !ele.startsWith("@");
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
// .join(" ");
console.log(finalString);
/*[77]
--forEach
---method executes a provided function once for each array element.
-syntax forEach (callBackFunction(element, index, array){}.ThisAry)
-element => the current element being processed in the array.
-index =>the index of the current element being processed in the array.
-array=> the current array
note 
-doesn't return anything [undefined]
-break will not break the loop
*/
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");
allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // console.log(this);
    // hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
  // console.log(ele.innerHTML);
});
console.log(allLis);
