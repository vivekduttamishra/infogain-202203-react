function isPrime(num){ 
    if (num < 2) 
        return false; 
    for (let i = 2; i < num; i++) 
        if (num % i === 0)
            return false;
    return true;
}
function findPrimes (min, max)  { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            if (min >= max) 
                return reject(new Error(`Invalid range (${min}-${max})`)); 
            let result = { min, max, primes: [] } 
            let lo = min; 
            let hi = max; 
            const primeInterval = setInterval(() => {               
                for (let i = lo; i < hi; i++) { 
                    if (isPrime(i)) 
                        result.primes.push(i) 
                } 
                if (hi === max) {                    
                    clearInterval(primeInterval); 
                    console.log(result); 
                    return resolve(result);  
                }           
                lo = hi; 
                hi = max; 
            }, 1000); 
        }, 1000); 
    }); 
} 
findPrimes(10,300); 









 