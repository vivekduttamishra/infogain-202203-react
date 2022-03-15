const calcAvg = (...numbers) =>{
    let sum = 0;
    numbers.forEach(num=> sum=sum+num)
    return sum/ numbers.length
};

console.log(calcAvg(0,4,7,8,4));