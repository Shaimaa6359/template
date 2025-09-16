/*[40]
Arrays
-create Arrays [1, 2, 3] now array() + []
-access Array elements by index
-nested Arrays=> array inside array
-change array elements
-check for array Array.isArray(arr)
*/
let myFriends = [
  "Abdullah",
  "Asmaa",
  "mai",
  "rania",
  "ghada",
  ["rawan", "malika"],
];
console.log(`My best friend is ${myFriends[0]}`);
console.log(`My Sisters are ${myFriends[3]} and ${myFriends[4]}`);
console.log(`My Childhood friend is ${myFriends[2]}`);
console.log(`${myFriends[1]} `);
console.log(`${myFriends[1][1]} `);
console.log(`${myFriends[5][1]} `);
console.log(`${myFriends[5][1][4]} `);

console.log(myFriends);

myFriends[0] = "Shaimaa";
console.log(myFriends);

myFriends[5] = ["layla", "alya"];
console.log(myFriends);

myFriends[0] = ["Shaimaa", "Abdullah"];
console.log(myFriends);

console.log(typeof myFriends);

console.log(Array.isArray(myFriends));

let Sh = "malika";

console.log(Array.isArray(Sh));
/*
    Arrays Methods
    --lenght
    Index Start from 0 [0,1,2,3]
    */
let mySisters = ["ghada", "rania", "rawan"];
console.log(mySisters.length); //3

mySisters[2] = "malika";
console.log(mySisters);
mySisters[3] = "rawan";
console.log(mySisters);
mySisters[6] = "amra";
console.log(mySisters);
console.log(mySisters.length); //7
mySisters[mySisters.length] = "asmaa";
console.log(mySisters);
console.log(mySisters.length); //8
mySisters[mySisters.length - 1] = "Aya";
console.log(mySisters);
console.log(mySisters.length); //8
mySisters.length = 3;
console.log(mySisters);
/*[42]
Arrays Methods[Adding and Removing Elements]

- push("", "") Add elements to the ending(the end position)
- pop() remove elements from the ending(the last position)
- unshift("", "") Add elements to the beginning(the first position)
- shift() remove the first element
*/
let myBrother = ["ahmad", "mohammed", "ali", "alaa", "ali"];
console.log(myBrother);
myBrother.unshift("ibrahim", "walid");
console.log(myBrother);
myBrother.push("yousef", "aslam");
console.log(myBrother);
let notmyBrother = myBrother.shift();
console.log(myBrother);
console.log(notmyBrother);
let unmyBrother = myBrother.pop();
console.log(myBrother);
console.log(unmyBrother);
/*[43]
Array Mathods [search]
-indexOf(search element, from index[optional])
-lastIndexOf(search element, from index[optional])
- includes(search element)
*/
console.log(myBrother);
console.log(myBrother.indexOf("ali")); //3
console.log(myBrother.indexOf("ali", 4)); //5
console.log(myBrother.lastIndexOf("ali")); //5
console.log(myBrother.lastIndexOf("ali", -3)); //3

console.log(myBrother.includes("walid")); //true
console.log(myBrother.includes("walid", 2)); //false
if (myBrother.indexOf("Abdullah") === -1) {
  console.log("Abdullah is not my brother");
}
if (myBrother.lastIndexOf("Abdullah") === -1) {
  console.log("Abdullah is not my brother");
}
if (myBrother.includes("Abdullah") === false) {
  console.log("Abdullah is not my brother");
}
/*[44]
Array Methods [Sorting]=>has sort in the challenge
- sort(function [optional])
- reverse()
*/
myItems = [
  "banana",
  "apple",
  "orange",
  "mango",
  100,
  "10",
  20,
  "grapes",
  "2000",
];
// myItems.sort();
// console.log(myItems);
// myItems.reverse();
// console.log(myItems);
console.log(myItems.sort().reverse());
/*
[45]
Array Methods [slicing]
-slice(start index, end index[optional] not including end index)
---slice() => All Array
---if start is undefind => 0
---if end is undefind => All Array
---negative index => count from end
---return new array
-splice (start index, delete count, item1, item2[optional])
---IF NEGATIVE INDEX => count from end
*/
let myCars = ["BMW", "mercedes", "tesla", "audi", "ford", "kia"];
console.log(myCars.slice(2, 3));
console.log(myCars.slice(0, 1));
console.log(myCars.slice(-4, -3));
console.log(myCars.slice(-4, -1));
console.log(myCars.slice(1, -3));
console.log(myCars.slice(myCars.length - 5, myCars.length - 3));
console.log(myCars);

myCars.splice(0, 0, "jeep", "nissan");
console.log(myCars);
myCars.splice(2, 1, "ferrari");
console.log(myCars);
/*[46]
Array Methods [Joining]
--concat(array, array2)=> return new array
---join(separator)
*/
let myArrays = myFriends.concat(mySisters, myBrother, myCars, "study");
console.log(myArrays);
console.log(myArrays.join(""));
console.log(myArrays.join("#").toUpperCase());
console.log(typeof myArrays.join(""));
