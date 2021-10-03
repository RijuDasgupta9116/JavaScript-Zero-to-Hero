console.clear();

var num1 = 10;  // Integer
var num2 = 10.9;    // Decimal Number

console.log(typeof(num1));
console.log(typeof(num2));

// Addition
var num3 = 15;
var sum = num3+num1+num2;
console.log(sum);

// Substracton
var diff = num3 - num1;
console.log(diff);

// multiplicatoin
var mul = num3*num1
console.log(mul);

// division
var div = num3/num1;
console.log(div);

// divide by zero
var divByZero = num3/0
console.log(divByZero);

console.log(typeof(divByZero));

// multiplication with string
var mulByString = num3 * 'A'
console.log(mulByString);
console.log(typeof(divByZero));



// solution of exercise
console.clear();
console.log(0 / 0)  // NaN
/*
why positiveNumber/0 is infinity by 0/0 is NaN 

Because that's how floating-point is defined (more generally than just Javascript). See for example:

http://en.wikipedia.org/wiki/Floating-point#Infinities
http://en.wikipedia.org/wiki/NaN#Creation

*/


console.log(0 / 5)  // 0
console.log(3 * 'a')    // NaN
console.log('a' * 3)    // NaN
console.log('b' + 4)    // b4
console.log(4 + 'b')    // 4b
console.log(5 - 'c')    // NaN
console.log('c' - 5)    // NaN