function isPrimenumber(num) {
    if(num<2)
    return false;
    for (let i=2; i<num;i++)
    if(num%i===0)
    return false;
    return true;
}
function findPrime (min,max) {
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(min>=max)
            return reject(new error(`invalid range(${min}-${max})`));
            let resultPrimes= { min,max,primes:[]}
            let lower=min;
            let higher=max;
            const primeInterval=setInterval(()  =>{
                for(let i=lower;i<higher;i++){
                    if(isPrimenumber(i))
                    resultPrimes.primes.push(i)
                }
                if(higher===max){
                    clearInterval(primeInterval);
                    console.log(resultPrimes);
                    return resolve(resultPrimes);
                }

                lower=higher;
                higher=max;
            },1000);
        },1000);
    });
}
findPrime(10,300);