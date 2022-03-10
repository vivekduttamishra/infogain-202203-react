
var list=[];

for(var i=0; i<10;i++)
    list.push(i*10);

console.log('list',list);


console.log('list.pop()',list.pop());  //pops the last item of the array


console.log('list',list); //item popped is removed from the array


//removing item from between

let removedItems = list.splice(3,4);  //remove 4 items starting from third location

console.log('removedItems',removedItems);  // [30,40,50,60]
console.log('list',list); //[0,10,20,70,80]







