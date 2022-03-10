
var U = [2, 12, "hello", new Date(), 17, 21, "world"];
var numbers= [];
var others=[];
U.filter((n)=>{
    if(typeof (n) == "number")
    numbers.push(n)
    else
    others.push(n)
})
//write a program to separate the list into two lists numbers and others.

//display the two lists

console.log('numbers',numbers);
console.log('others',others);



