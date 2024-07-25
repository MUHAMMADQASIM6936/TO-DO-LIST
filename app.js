let arr=[];

while(true){
let ans=prompt("what would you like to do");
console.log(ans);

if(ans==='new'){
    let item=prompt('enter the item to add');

arr.push(item);

    console.log(`${item} added to the list`);

}
else if(ans==='list'){
for(let i=0;i<arr.length;i++){
    console.log(` ${i},${arr[i]}`);
}
}
else if(ans==='delete'){
 arr.pop();    
 console.log('an item has been deleted');

}
else if(ans==='quit'){
console.log('you have quit the app');
break;
}
}