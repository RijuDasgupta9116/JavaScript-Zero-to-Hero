console.clear();
var name1 = "Mahendra Singh Dhoni";

// toUpperCase()
console.log(name1.toUpperCase());

// toLowerCase()
console.log(name1.toLowerCase());

// concat() - It merges two or more strings
var firstName = 'Ravindra';
var lastName = 'Jadeja';
console.log(firstName.concat(' ',lastName));

console.log(firstName+" "+lastName)

// trim() -  It removes extra spaces
var extraSpaceString = '     my string    ';
console.log(extraSpaceString.trim());

// charAt() - This take a position as an arg and returns the character at that position
var charAtExampleString = 'This is my test string';
console.log(charAtExampleString.charAt(5));
console.log(charAtExampleString.charAt(11));

// split() - splits our string on the basis of the arguments passed

var sampleString = 'This is my sample string';
console.log(sampleString.split(' '));

var sampleString = 'This,is,my,sample,string';
console.log(sampleString.split(','));

