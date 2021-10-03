var myFirstString = "I love JavaScript";

console.log(typeof(myFirstString));

var mySecondString = 'we will learn JavaScript together';

console.log(typeof(mySecondString));

// what if my string contains adouble quote
var doubleQuoteSting = "This is a \"JavaScript\" string";
console.log(doubleQuoteSting);

var doubleQuoteSting2 = 'This is a "JavaScript" string';
// console.log(doubleQuoteSting);
console.log(doubleQuoteSting2);

// what if my string contains a single quote
var singleQuoteSting = 'This is a \'JavaScript\' string';
console.log(singleQuoteSting);

var singleQuoteSting2 = 'This is a "JavaScript" string';
console.log(doubleQuoteSting2);

/* JS String in-built functions */
console.clear();

var myString = "Lorem ipsum dolor sit amet";
// returns length of the string
console.log(myString.length);

// Find index of a string inside another string
console.log(myString.indexOf('dolor'));
// if it finds the string then it returns the index of 1st character , otherwise returns -1
console.log(myString.indexOf('Lorem'));

console.log(myString.indexOf('Lorem'));

// Find last index of a string inside another string

console.log(myString.lastIndexOf('amet'));

// Get a part of our string slice(start, end)
console.log(myString.slice(0,5));
console.log(myString.slice(-4));


// Get sub string function - substr(startPos,length)
console.log(myString.substr(0,4));




