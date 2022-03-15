const isPrime= number =>{

    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if(number%i==0)
            return false;

    return true;

}

const findPrimes =  (min,max,cb)=>{
    let result=[];

    for(let i=min;i<max;i++)
        if(isPrime(i))
            result.push(i);

    //return result;
    cb(result);
}



const testFindPrimes=(min,max)=>{

    console.log(`finding primes between ${min}-${max}. job started  `);
    let start=new Date();

    findPrimes(min,max, result=>{

        let end = new Date();
        console.log(`total primes between ${min}-${max} is ${result.length}.\t time taken is ${end-start} ms`);
    });
}


testFindPrimes(2,500000);

testFindPrimes(2,100);

testFindPrimes(2,200000);

