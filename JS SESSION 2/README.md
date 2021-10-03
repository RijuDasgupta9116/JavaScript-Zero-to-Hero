## <center>-: <b><u>JavaScript Numbers</u></b> :-</center>



# JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
<br><br>
JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
<br><br>

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, the exponent in bits 52 to 62, and the sign in bit 63:


<table border="1" class="ws-table-all">
  <tbody><tr>
    <th>Value (aka Fraction/Mantissa)</th>
    <th>Exponent</th>
    <th>Sign</th>
  </tr>
  <tr>
    <td>52 bits (0 - 51)&nbsp;</td>
    <td>11 bits (52 - 62)</td>
    <td>1 bit (63)</td>
  </tr>
</tbody></table>
<br><br>
<hr>
<br><br>

## To check datatype of a variable we have to use typeof() function :-

```
var num1 = 10;  // Integer
var num2 = 10.9;    // Decimal Number

console.log(typeof(num1));
console.log(typeof(num2));
```
Addition in JavaScript :-

```
// Addition
var num3 = 15;
var sum = num3+num1+num2;
console.log(sum);
```
Substraction in JavaScript :-

```
// Substracton
var diff = num3 - num1;
console.log(diff);
```
Multiplication in JavaScript :-

```
// multiplicatoin
var mul = num3*num1
console.log(mul);
```
Division in JavaScript :-

```
// division
var div = num3/num1;
console.log(div);
```
Divide by zero. Here we get another Datatype <b>Infinity</b>
```
// divide by zero
var divByZero = num3/0
console.log(divByZero);

console.log(typeof(divByZero));
```
Multipication with String. Here we get another Datatype <b>NaN (Not a Number)</b>

```
// multiplication with string
var mulByString = num3 * 'A'
console.log(mulByString);
console.log(typeof(divByZero));
```

## There is a exercise for you 

<b>Q. Answer the following questions. Also, explain why do you think that your answer is
correct.</b>

```
console.log(0 / 0)
console.log(0 / 5)
console.log(3 * 'a')
console.log('a' * 3)
console.log('b' + 4)
console.log(4 + 'b')
console.log(5 - 'c')
console.log('c' - 5)
```

<hr>
<br>

## <center>-: <b><u>JavaScript Numbers - Built-in Functions</u></b> :-</center>
Now we are talking about some JavaScript Number built-in functions
1. toString() [number as input and returns a string]
```
var num1 = 23;
console.log(num1.toString());
// checking the data type
console.log(typeof(num1.toString())); 
```

2. parseInt() [string numeral as input returns a number]
```
var num1 = 25;
var num2 = 215.63;
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));   // as it is printing an integer now, so 215 will be printed not 215.63

// checking thd data type
console.log(typeof(parseInt(strNum2)));

```

3. parseFloat() [string numeral as an input and returns a floating number]
```
var num1 = 25;
var num2 = 215.63;
console.log(parseFloat(strNum1));
console.log(parseFloat(strNum2));

// checking thd data type
console.log(typeof(parseFloat(strNum2)));

```

4. toFixed() [takes floatingnumber and rounds it off to given position
]
```
var num1 = 26.2847892;
console.log(num1.toFixed())   // if we doesnot give any parameter then it will round up the number
console.log(num1.toFixed(2))  // as we give the parameter value 2, it print the number with 2 decimal points
```


## There is a exercise for you 

<b>Q. Answer the following questions. Also, explain why do you think that your answer is
correct.</b>
```
console.log(toString(100))
console.log(parseInt('44'))
console.log(parseInt('22.222'))
console.log(parseInt('Banana'))
console.log(parseFloat(12))
console.log(parseFloat(13.3))
var num1 = 10; 
console.log(num1.toFixed(2))
var num1 = 15.456789; 
console.log(num1.toFixed())
var num1 = 15.456789; 
console.log(num1.toFixed(2))
var num1 = 15.456789; 
console.log(num1.toFixed(3))
```
