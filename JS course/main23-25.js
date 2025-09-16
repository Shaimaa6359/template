/*
Number
- Double Precision
- Syntactic Sugar"_"
-e
-**
-With Decimal
-Number +BigInt
-Number Min Value
-Number Max Value
*/
console.log(1000000);
console.log(1_00_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
/* Number.operation خواص
 */
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 222234555);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
/*
Number Methods
-Two Dots To call AMethods
-toString()
-toFixed()
-parseFloat()
isInteger()[es6]
-isNaN()[ES6]
*/
console.log((100).toString());
console.log((100.1).toString());

console.log((100.36).toFixed());
console.log(Number("100 shaimaa"));
console.log(+"100 shaimaa");
console.log(parseInt("shaimaa 100 shaimaa"));
console.log(parseInt(" 100 shaimaa"));
console.log(parseInt("123.100 shaimaa"));
console.log(parseFloat("shaimaa 100 shaimaa"));
console.log(parseFloat(" 123.100 shaimaa"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.15));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Shaimaa" / 20));
/*[25]
Math Object
-round()
-ceil()
-floor()
-min()
-max()
-pow()
-random()
-trunc() (Es6)
*/
console.log(Math.round(2.3));
console.log(Math.round(2.6));

console.log(Math.ceil(2.3)); //max
console.log(Math.ceil(2.6));

console.log(Math.floor(2.6)); //min
console.log(Math.floor(2.3));

console.log(Math.min(10, 20, 100, -100, 2, -2));
console.log(Math.max(10, 20, 100, -100, 2, -2));

console.log(Math.pow(2, 5));

console.log(Math.random());
console.log(Math.trunc(2.9)); //Returns the integral part
