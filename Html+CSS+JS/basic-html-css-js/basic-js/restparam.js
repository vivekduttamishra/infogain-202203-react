function sum (... numbesrs){

    let sum =0;
    for(let i of numbesrs){
        sum+=i;
    }
    return sum;
   
}
console.log(sum(1,2,3));

// For Average  with Rest parameter.
function average(...nums) {
    let total = 0;
    
    for (const num of nums) {
      total += num;
    }
    
    return total / nums.length;
  }
  
  console.log(average(2, 3, 3, 5, 7, 10));
  

//    Filter 
const age=[32,34,45,56];
const result=age.filter(checkAdult);
function checkAdult(){
    return age>=35
}
console.log(age);