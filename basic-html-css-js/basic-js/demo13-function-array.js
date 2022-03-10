
function plus(x,y){return x+y;}
var minus = function(x,y){return x-y;}
var multiply = function(x,y){return x*y;}
var divide = function(x,y){return x/y;}

var operations = [plus,minus,multiply,divide] ; // a list of operations

var a=50;
var b=15;


//we can run batch operations here

for(var i=0;i<operations.length;i++)
{ 
    let result=operations[i](a,b);

    console.log(a, operations[i].name, b, '=', result);
}


