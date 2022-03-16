
const isPrime=(number)=>{

    if(number<2)
        return false;

    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;

    return true;
}


export function findPrimes(min,max){

    return new Promise( (resolve, resolve ) =>{

        setTimeout(()=>{
            if(min>=max)
                return reject(new Error(`Invalid range ${min}-${max}`));

            let primes=[];

            for(let i=min; i<max; i++){
                if(isPrime(i)) 
                    primes.push(i)
            }

            resolve(primes);

        },10);

    });

}