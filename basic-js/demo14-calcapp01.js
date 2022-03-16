//Assignment 14.1 working with calculator to support +, -, *, /


function calculator(number1, number2, operator){
    var result =NaN;

    if(operator==='+')
        result=number1+number2;
    else if(operator==='-')
    result=number1-number2;
    else if(operator==='*')
    result=number1*number2;
    else if(operator==='/')
    result=number1/number2;
    
    if(isNaN(result))
        console.error('invalid operator:'+operator);
    else
        console.log(number1,operator,number2,'=', result);
}


calculator(12,5,'+');
calculator(20,4,'-');
calculator(4, 3, '^');

