console.clear();

// toString() number as input and returns a string
var num1 = 10;
var num2 = 20.3;

console.log(typeof(num1.toString()));
console.log(typeof(num2.toString()));

// parseInt() string numeral as input returns a number
var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = 'ABC';

console.log(typeof(parseInt(strNum1)));
console.log(typeof(parseInt(strNum2)));
console.log(parseInt(strNum1));
console.log(parseInt(strNum2)); // as we use parseInt function the result will be 11 not 11.5
console.log(parseInt(strNum3));

// parseFloat() string numeral as an input and returns a floating number

console.log(typeof(parseFloat(strNum1)));
console.log(typeof(parseFloat(strNum2)));
console.log(parseFloat(strNum1));
console.log(parseFloat(strNum2));


// toFixed() takes floatingnumber and rounds it off to given position

var strFloat = 99.563189;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));

console.clear();

console.log(toString(100))  // [Object undefine]
console.log(parseInt('44')) // 44
console.log(parseInt('22.222')) // 22
console.log(parseInt('Banana')) // NaN
console.log(parseFloat(12)) // 12
console.log(parseFloat(13.3))   // 13.3
var num1 = 10; 
console.log(num1.toFixed(2))    //10.00
var num1 = 15.456789; 
console.log(num1.toFixed()) // 15
var num1 = 15.456789; 
console.log(num1.toFixed(2))  // 15.46
var num1 = 15.456789; 
console.log(num1.toFixed(3))    // 15.457

