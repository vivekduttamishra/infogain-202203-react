function average(2,3)
let sum=0;
let avg=0;
for (const num of nums){
    sum += num;
    avg =sum/nums.length;
}
return avg;
}
console.log(average(2,3,9,8,11,4,2));
