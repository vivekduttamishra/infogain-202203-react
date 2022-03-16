
var U = [2, 12, "hello", new Date(), 17, 21, "world"];


//write a program to separate the list into two lists numbers and others.
var numbers = []
var others = []

for (var i = 0; i < U.length; i++) {

    dataType = typeof U[i]

    if(dataType === "number"){
        numbers.push(U[i])
    } else {
        others.push(U[i])
    }
}
//display the two lists

console.log('numbers is :',numbers);
console.log('others is:',others);


function average(...nums) {
    let total = 0;
    for(const num of nums) {
    total += num/nums.length;
    }
    return total;
}
console.log(average(2,3,9,8,11,4,2));




// calculator Assignment.



