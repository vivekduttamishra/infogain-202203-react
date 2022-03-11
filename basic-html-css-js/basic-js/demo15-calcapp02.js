//Assignment 14.1 working with calculator to support +, -, *, /

//basic operator set

function plus(a,b) {return a+b; }

var minus=function(a,b){return a-b;}

var multiply=function(a, b) {return a*b;}

var divide=function(a,b) {return a/b; }



function calculator(number1, number2, operatorFunction){
    
    var result=NaN;

    if(operatorFunction)
        result=operatorFunction(number1,number2);
    else
        return console.log('No operator supplied');
   
     console.log(number1,operatorFunction.name,number2,'=', result);
}


calculator(12, 13, plus);

calculator(15, 4, multiply);


// var  mod=function(a,b){
//     return a%b;
// };


// var  mod= (a,b) => {
//     return a%b;
// };



var  mod= (a,b) =>  a % b      ;


calculator(50, 15, mod);




//how do I do a custom operator like a*a + b * b


calculator(3, 4, (x,y)=> x*x + y*y );       //this funciton does't have  name


calculator(10, 5, function(x,y){
    return (x+y)/(x-y);
});






