
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

