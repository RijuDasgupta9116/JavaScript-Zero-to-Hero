<center><b>What is Loop?</b></center>
The repetition of code is called Loop and each repettiion is called Iteration, In another words, running the same lines of code for a certain number of times is called loop.

<br><br>
<hr>
<center><b>Problem Statement</b></center>
Say you are having a party and you have a guest list which has the naes of all your friends. Now, the problem is that you don't remember if you invide a certain friend say "Darth Vader".

<i> solution :- </i>
run a loop using all the friends list and find that this name "Darth Vader" is present or not.
<hr>
<center><b>Loops in JavaScript</b></center>
JavaScript offers you two loops - <i>While Loop</i> and <i>For Loop</i>.

<br>

- When you know, how many times your loop needs to iterate then you can use <i>For Loop</i>.

<br>

- When you have the kind of loop where you need to stop the loop based on certain condition, you can use <i>While Loop</i>.

<h3><center><b>While Loop</b></center></h3>

```
var i = 0;
while(/*condition*/){
    // block of statements
}
```
<i>for example</i>

```
var i = 0;
while(i<50){
    i++;
}
console.log(i);
```

<h3><center><b>For Loop</b></center></h3>

```
for(/*initialization*/;/*condition*/;/*increment/decrement*/){
     // block of statements
}
```

```
var list = [1,2,3,4,5];
var pos;
for(pos=0;pos<list.length;pos++){
     console.log("position=>",pos,"value=>",list[pos]);
     console.log(list[pos]);
}
```

<center><b>Break & Continue Statement</b></center>

- <h3>Break</h3>

```
for(pos=0;pos<list.length;pos++){
    if(pos>=3){
        break;
    }
    // console.log("position=>",pos,"value=>",list[pos]);
}
```

- <h3>Continue</h3>

```
for(pos=0;pos<list.length;pos++){
    if(pos%2!=0){
        continue;
    }
    console.log("position=>",pos,"value=>",list[pos]);
}
```
