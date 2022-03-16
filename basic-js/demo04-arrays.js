
var list= [ 2, 4.5, 'hello world', new Date() ];


console.log('list.length',list.length);


console.log('list[0]',list[0]);


console.log('list[100]',list[100]);  //undefined

//accessing the array using for-loop

for(var i=0; i<list.length; i++)
    console.log('list[',i, '] =>',list[i]);

//accessing the array using for-of loop


for(var value of list)
    console.warn(value);


