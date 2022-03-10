// var U = [2, 12, "hello", new Date(), 17, 21, "world"];


//write a program to separate the list into two lists numbers and others.



//display the two lists

// console.log('others',others);
// console.log('numbers',numbers);

var U = [2, 12, "hello", new Date(), 17, 21, "world"];
let p=[]; //numbers
let q=[]; //others
for(let i in U){
    if(typeof U[i] ==='number'){
        p.push(U[i]);
    }
    else{
        q.push(U[i]);
    }
}
console.log(p);
console.log(q);
