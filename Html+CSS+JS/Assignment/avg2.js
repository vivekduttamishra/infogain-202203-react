const calculateAvg = (...numbers) =>{
    let sum = 0;
    numbers.forEach(num=> sum=sum+num)
    return sum/ numbers.length
};

console.log(calculateAvg(0,4,7,8,4));