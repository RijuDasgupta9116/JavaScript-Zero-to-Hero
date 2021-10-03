## <center> -: <b><u>JavaScript Strings</u></b> :-</center>
String can be written with double qoute as well as single qoute. For Example :-
```
var myString = "I love JavaScript";
var myString2 = 'we will learn JavaScript together';
```
Some more concept on JavaScript String (run the codes and you will definitely understand) :-

```
var doubleQuoteSting = "This is a \"JavaScript\" string"; // using escape character
console.log(doubleQuoteSting);

var doubleQuoteSting2 = 'This is a "JavaScript" string';  // double qoute inside single quote
console.log(doubleQuoteSting2);

var singleQuoteSting = 'This is a \'JavaScript\' string'; // using escape character
console.log(singleQuoteSting);

var singleQuoteSting2 = 'This is a "JavaScript" string';  // single qoute inside double quote
console.log(doubleQuoteSting2);
```
## There is a exercise for you 

<b>Q. Answer the following questions. Also, explain why do you think that your answer is
correct.</b>
```
console.log('JavaScript is Cool")
console.log('I'm gonna learn JavaScript')
console.log("This is a \"test\" string")
console.log('This is another /'test/' string')
console.log("How about this string??")
```
<hr>

## <center> -: <b><u>JavaScript Strings Built-in Functions</u></b> :-</center>
```
var name = "Mahendra Singh Dhoni";
```
- How to measure the length of string ?
```
console.log(name.length);
```
- How to find index of a string inside another string ?
```
console.log(name.indexOf('Singh'));
```
- How to find last index of a string inside another string?
```
console.log(name.lastIndexOf('Dhoni'));
```
- How to slice a string ?
```
// str.slice(start,end);
console.log(name.slice(2,6));
```

- How to get subString of a string ?
```
// str.substr(startPos,length);
console.log(name.substr(0,4));
```

## There is a exercise for you 
<b>Q. Answer the following questions. Also, explain why do you think that your answer is
correct.</b>
```
var mStr = "This is my test string to practice the JavaScript string function concepts.
This is gonna be fun.";

// 1. Find the length of the first sentence in the string.
// 2. Find the length of the second sentence in the string.
// 3. Find the first and last occurrence of the word "This".
// 4. Find the sub-string with length 12 from the START of the string mStr.
// 5. Find the sub-string with length 12 from the END of the string mStr.
```

## <center> -: <b><u>Some more Built-in Functions</u></b> :-</center>

- toUpperCase() :-
```
var name1 = "Mahendra Singh Dhoni";
console.log(name1.toUpperCase());
```
- toLowerCase() :-
```
var name1 = "Mahendra Singh Dhoni";
console.log(name1.toLowerCase());
```
- concat() :-
```
var firstName = 'Ravindra';
var lastName = 'Jadeja';
console.log(firstName.concat(' ',lastName));
// another technique
console.log(firstName+" "+lastName)
```
- trim() :-
```
var extraSpaceString = '     my string    ';
console.log(extraSpaceString.trim());   // remove extra spaces
```
- charAt() :-
```
var charAtExampleString = 'This is my test string';
console.log(charAtExampleString.charAt(5));
```
- split() :-
```
var sampleString = 'This,is,my,sample,string';
console.log(sampleString.split(','));   // returns an array
```


