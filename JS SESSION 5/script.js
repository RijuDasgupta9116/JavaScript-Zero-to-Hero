console.clear();

// var val = 0;
// while(val<50){
//     val++;
// }
// console.log(val);

var list = [1,2,3,4,5];
var pos;
for(pos=0;pos<list.length;pos++){
    console.log("position=>",pos,"value=>",list[pos]);
    console.log(list[pos]);
}

//break
for(pos=0;pos<list.length;pos++){
    if(pos>=3){
        break;
    }
    console.log("position=>",pos,"value=>",list[pos]);
}

// continue
for(pos=0;pos<list.length;pos++){
    if(pos%2!=0){
        continue;
    }
    console.log("position=>",pos,"value=>",list[pos]);
}