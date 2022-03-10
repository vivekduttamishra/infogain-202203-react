
var U = [2, 12, "hello", new Date(), 17, 21, "world"];


//write a program to separate the list into two lists numbers and others.
var other = [], numbers = [];
for (var i = 0; i < U.length; ++i) {
    if (U[i] >= 0)
        numbers.push(U[i]);
    else
        other.push(U[i]);
}

//display the two lists
console.log('others', other);
console.log('numbers', numbers);









