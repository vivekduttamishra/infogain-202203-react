var  numbers= [2,3,8,7,14,22,28,49 ]; 

var array1 = [];

numbers.forEach(number => {

    if (number % 7 === 0 ){

        array1.push(number);

    }

})

console.log(array1);