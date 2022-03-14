
// var U = [2, 12, "hello", -1,  new Date(), 17, 21, "world"];


//write a program to separate the list into two lists numbers and others.
// var numbers=[];
// var others=[];

// for(var value of U)
// {
//     if(typeof(value)==='number')  
//         numbers.push(value);
//     else
//         others.push(value);
// }


//display the two lists

// console.log('others',others);
// console.log('numbers',numbers);



//Assignment4.1
 function average() {
            var sum = 0;
            var avg = 0;
            for (var i = 0; i < arguments.length; i++) {
                if (typeof arguments[i] === 'number'){
                sum = sum + arguments[i];
                } else{
                    arguments.length -= 1;
                }
            }
            avg = sum / arguments.length;
            return avg;
        }

        console.log(average(2, 3));
        console.log(average(2, 3, 9, 8, 11, 4, 2));
        console.log(average(1, 2, 3, "hello", 4, 5, 6));


//Assignment 4.2

function calculator(v1, v2, operation) {
    // if(!v1 || !v2){
    //     return "Invalid Number"
    // }
    switch (operation) {
        case "+":
            return result = v1 + v2;
            break;
        case "/":
            return result = v1 / v2;
            break;
        case "*":
            return result = v1 * v2;
            break;
        case "-":
            return result = v1 - v2;
            break;
        default:
            return("Invalid operator");
    }
}
console.log("Sum", calculator(5, 6, "^"));
console.log("Divi", calculator(8, 2, "/"))
console.log("Mul", calculator(5, 6, "*"))
console.log("Minus", calculator(12, 6, "-"))
 




