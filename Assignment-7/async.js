
    function isPrime(number) {
        if (number < 2)
            return false;
        for (let i = 2; i < number; i++)
            if (number % i === 0)
                return false;

        return true;
    }


    function findPrimePromise(min, max) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (min >= max)
                    return reject(new Error(`Invalid range (${min}-${max})`));

                let result = { min, max, primes: [] }
                let low = min;
                let high = max;

                const primeInterval = setInterval(() => {

                    for (let i = low; i < high; i++) {
                        if (isPrime(i))
                            result.primes.push(i)
                    }

                    if (high === max) {

                        clearInterval(primeInterval);
                        console.log(result);
                        return resolve(result);
                    }


                    low = high;
                    high = max;

                }, 100);

            }, 100);
        });

    }

    async function findPrimesInRange(min, max) {

        console.log(`finding primes between ${min}-${max}`);
        try {

            const result = await findPrimePromise(min, max);


            console.log(`total primes in range 
                        (${result.min}-${result.max}) 
                        is ${result.primes.length}`);


        } catch (error) {

            console.error(error.message)
        }
    }
    findPrimesInRange(2, 200000);
    findPrimesInRange(10, 1);
    findPrimesInRange(2, 10000);
