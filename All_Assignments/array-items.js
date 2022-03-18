
var U = [2, 12, "hello", new Date(), 17, 21, "world","hi"];


//write a program to separate the list into two lists numbers and others.

// var numbers = []
// var remainingElement = []

// for (var i = 0; i < U.length; i++) {

//     elementType = typeof U[i]

//     if(elementType === "number"){
//         numbers.push(U[i])
//     } else {
//         remainingElement.push(U[i])
//     }
// }

// console.log("numbers array", numbers)
// console.log("rmaining array ", remainingElement)


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