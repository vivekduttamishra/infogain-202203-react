
var  numbers= [2,3,8,7,14,22,28,49 ]; 

var arr = [];

numbers.forEach(n => {

    if (n % 7 === 0 ){

        arr.push(n);

    }

})

console.log(arr);