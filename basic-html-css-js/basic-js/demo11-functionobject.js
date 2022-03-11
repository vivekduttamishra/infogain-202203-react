

function plus(x,y){
    return x+y;
}
//function has a type of 'function'
console.log('typeof plus',typeof plus);

//function can be referred by a variable
var add = plus; 

console.log('typeof add',typeof add);

//a variable referring to a function can be used as function parameter
console.log('add(2,9)',add(2,9));


//function assigned to variable 'minus'






var minus = function substract(x,y){
    return x-y;
}

console.log('typeof minus',typeof minus);


console.log('minus(5,2)',minus(5,2));

console.log('typeof substract',typeof substract);

console.log('substract(5,2)',substract(5,2));










