// Write a function using rest parameter syntax to sum all given numbers. 
// Write a function using rest parameters sysntax to average all given numbers 
// Average function must re-use sum function 

 
function sum(...numbers)
{
    var sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
}

sum(1,2);
sum(1,2,3,4,5)

function avg(...nums)
{
    return sum.apply(null, nums)/nums.length;
}
console.log('average',avg(1,2));
console.log('average',avg(1,2,3,4,5));


// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }

// function average(...numbers){
//     return sum(...numbers)/numbers.length;
// }

// console.log('average',average(1,3,4,2,5));
