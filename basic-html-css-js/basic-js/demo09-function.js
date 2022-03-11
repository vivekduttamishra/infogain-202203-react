

function add(n1, n2){
    return n1+n2;
}

console.log('add(2,3)',add(2,3));


console.log('add(5,9)',add(5,9));


console.log('add("hello"," world")',add("hello"," world"));


console.log('add(1,2,3,4)',add(1,2,3,4));

console.log('add(5)',add(5));  // add(5,undefined)  ->    5 + undefined  -> NaN


console.log('add(5,"Hello")',add(5,"Hello"));
