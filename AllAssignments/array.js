var arr = [2, 12, "hello", -1, new Date(), 17, 21, "world"];

var numbers=[];
var others=[];

for(var value of arr)
{
    if(typeof(value)==='number')  
        numbers.push(value);
    else
        others.push(value);
}

//display the two lists
console.log('others',others);
console.log('numbers',numbers);