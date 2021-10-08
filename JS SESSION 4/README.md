## <center>-: <b>Conditional Statements in JavaScript</b> :-</center>

### If-Else Statement
If-Else statements in JavaScript is same as C programming language
```
var age = prompt("Enter your age : ");
if(age>=18 && age<60){
    console.log('You can vote');
}
else if(age>=60 && age<=100){
    console.log('You are a senior citizen');
}
else{
    console.log('You can\'t vote');
}
```
- <p style="color:rgb(199, 39, 39);">Remember One Thing here we don't use '=='. Instead of these we use '==='</p>

### Switch-Case Statement

Switch-Case Statement in JavaScript is also same as like C programming
```
var day = prompt('Enter day (Mon,Tues,...) : ');  
        switch(day){
          case 'Mon':
            console.log('Monday');
            break;
          case 'Tues':
            console.log('Tuesday');
            break;
          case 'Wedness':
            console.log('Wednessday');
            break;
          case 'Thus':
            console.log('Thusday');
            break;
          case 'Fri':
            console.log('Friday');
            break;
          case 'Satur':
            console.log('Saturday');
            break;
          case 'Sun':
            console.log('Sunday');
            break;
          default :
            console.log('Wrong Prompt');
        }
```
