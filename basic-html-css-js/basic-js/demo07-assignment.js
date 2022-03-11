
var U = [2, 12, "hello", -1,  new Date(), 17, 21, "world"];


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



//Assignment4.1
 function average() {
            var sum = 0;
            var avg = 0;
            for (var i = 0; i < arguments.length; i++) {
                sum = sum + arguments[i];
                avg = sum / arguments.length;
            }
            return avg;
        }

        console.log(average(2, 3));
        console.log(average(2, 3, 9, 8, 11, 4, 2));
        console.log(average(1, 2, 3, "hello", 4, 5));


//Assignment 4.2

function calculator(v1, v2, operation) {
    switch (operation) {
        case "+":
            return v1 + v2;
            break;
        case "/":
            return v1 / v2;
            break;
        case "*":
            return v1 * v2;
            break;
        case "-":
            return v1 - v2;
            break;
        default:
            return("Enter valid number");
    }
}
console.log("Sum", calculator(5, 6, "+"));
console.log("Divi", calculator(8, 2, "/"))
console.log("Mul", calculator(5, 6, "*"))
console.log("Minus", calculator(12, 6, "-"))

// How do we create several  person? 
// Each will have  
// Name 
// Age 
// show() 
// eat() 




