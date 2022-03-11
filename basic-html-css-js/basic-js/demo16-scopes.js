
var gobj="global";

function f1(){
    console.log("in f1()");
    console.log('gobj',gobj);
    var f1Local="f1Local";
    console.log('f1Local',f1Local);
    f1Local+="-modifed by f1";
    gObj='-modified by f1'; 
        
}

function f2(){
    console.log("in f2()");
    console.log('gobj',gobj);
    gobj+="-modifed by f2";
    f2Local="f2Local";
    console.log('f2Local',f2Local);
    
}

function f3(){
    console.log("in f3()");
    console.log('gobj',gobj);
    console.log('f2Local',f2Local);
    console.log('f1Local',f1Local);       
}


f1();
f2();
f3();





