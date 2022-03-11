

function f1(){
    for(var i=0;i<10;i++) 
        ;

    console.log(i); //10
}

f1();

function f2(){
    for(let i=0;i<10;i++) 
        ;

    console.log(i); //i is not defined
}

f2();
