/* 
[27]
string mrethods
-Access With Index 
-Access With CharAt()
-length
- trim()
- toUpperCase()
- toLowerCase()
- chain Methods
*/
let theName = "  Shaimaa  ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName[0]);
console.log(theName[5]);
console.log(theName[7]);
console.log(theName[12]);

console.log(theName.charAt(0));
console.log(theName.charAt(5));
console.log(theName.charAt(7));
console.log(theName.charAt(12));

console.log(theName.length);

console.log(theName.trim());

console.log(theName.toUpperCase());

console.log(theName.toLowerCase());

console.log(theName.trim().charAt(5).toUpperCase());
console.log(theName.trim().charAt(4).toUpperCase());
/*[28]
string Methods
-inderOf(value[mand],start[opt])
-lastIndexOf(value[mand],start[opt]length)
-slice(start[mand], start[opt] not include end)
-repeat(times)[Es6]\
-split(separater[opt],limit[opt])

*/
let a = "Abdullah Web Mentor";

console.log(a.indexOf("h"));
console.log(a.indexOf("A"));
console.log(a.indexOf("o"));
console.log(a.indexOf("e"));
console.log(a.lastIndexOf("A"));
console.log(a.lastIndexOf("o"));
console.log(a.lastIndexOf("e"));

console.log(a.slice(1, 4));

console.log(a.repeat(3));

console.log(a.split());
console.log(a.split(""));
console.log(a.split(" "));
console.log(a.split(" ", 1));
console.log(a.split("", 1));
/*29
String Methods
*/
console.log(a.length);
console.log(a.substring(2));
console.log(a.substring(3));
console.log(a.substring(18));
console.log(a.substring(-10, 8));
console.log(a.substring(a.length - 6, a.length - 5));

console.log(a.substr(9, 3));
console.log(a.substr(0, 8), a.substr(13, 7));
console.log(a.substr(-6, 1));

console.log(a.endsWith("h", 8));
console.log(a.endsWith("ah", 8));
console.log(a.endsWith("or"));

console.log(a.startsWith("A"));
console.log(a.startsWith("A", 8));
console.log(a.startsWith("ah", 6));
console.log(a.startsWith("d", 2));

console.log(a.includes("bdu"));
console.log(a.includes("web"));
console.log(a.includes("Web"));
