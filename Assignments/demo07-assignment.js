

// var U = [2, 12, "hello", new Date(), 17, 21, "world"];
// var numbers= [];
// var others=[];
// U.filter((n)=>{
//     if(typeof (n) == "number")
//     numbers.push(n)
//     else
//     others.push(n)
// })
// //write a program to separate the list into two lists numbers and others.

// //display the two lists

// console.log('numbers',numbers);
// console.log('others',others);


function average() {
    var length = arguments.length;
    var sum = 0;
    
    for(var i=0; i<length; i++) {
        if (!isNaN(arguments[i])) {
            sum = sum + arguments[i];
        }
    }
    return sum/length;
  }
  
  console.log(average(2,3));
  console.log(average(2,3,9,8,11,4,2))
  console.log(average(1,2,3,"hello",4,5))






