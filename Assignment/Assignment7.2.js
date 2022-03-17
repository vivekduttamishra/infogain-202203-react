function isPrime(number) {
    if (number < 2)
        return false;
    for (let i = 2; i < number; i++)
        if (number % i == 0)
            return false;
    return true;
}

function findPrimes(min, max) {
    let result = [];
    return new Promise((resolve, reject) => {
        for (let i = min; i < max; i++)
            if (isPrime(i))
                result.push(i);
        resolve(result)
        reject(new Error("Invalid Number"))
    });
}

async function testFindPrimes(min, max) {
    try {
        console.log(`finding primes in range ${min}-${max}`);
        let start = new Date();
        let primes = await findPrimes(min, max);
        let end = new Date();
        console.log(`Total primes in range ${min}-${max} is ${primes.length}. \tTotal time taken is ${end - start} ms`);
    } catch (error) {
        console.log(error => console.log(error.message));
    }
}

testFindPrimes(2, 200000); //should finish last 
testFindPrimes(10, 1); //should finish first with error 
testFindPrimes(2, 1000); //should finish second 