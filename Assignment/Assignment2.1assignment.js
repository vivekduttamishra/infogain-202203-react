
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



