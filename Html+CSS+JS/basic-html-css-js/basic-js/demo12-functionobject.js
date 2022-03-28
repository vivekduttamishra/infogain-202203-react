

function plus(x,y){                 //plus is added to window/global context
    return x+y;
}
//function has a type of 'function'
console.log('typeof plus',typeof plus);

//function can be referred by a variable
var add = plus;     //add is added to window or global context

console.log('typeof add',typeof add);


var minus = function  (x,y){  //minus is added to window/global context.  If this function had a name, it won't be added to global
    return x-y;
}



//a variable referring to a function can be used as function parameter
console.log('add(2,9)',add(2,9));


//function assigned to variable 'minus'








console.log('typeof minus',typeof minus);


console.log('minus(5,2)',minus(5,2));












