
var U = [2, 12, "hello", -1,  new Date(), 17, 21, "world"];


//write a program to separate the list into two lists numbers and others.
var numbers=[];
var others=[];

for(var value of U)
{
    if(typeof(value)==='number')  
        numbers.push(value);
    else
        others.push(value);
}


//display the two lists

console.log('others',others);
console.log('numbers',numbers);



