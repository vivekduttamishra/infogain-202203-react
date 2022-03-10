var U = [2, 12, "hello", new Date(), 17, 21, "world", "hi"];


//write a program to separate the list into two lists numbers and others.

var numberList = []
var otherList = []

for (var i = 0; i < U.length; i++) {
    typeOf = typeof U[i]
    if (typeOf === "number") {
        numberList.push(U[i])
    } else {
        otherList.push(U[i])
    }
}

console.log("numbers array", numberList)
console.log("others array ", otherList)