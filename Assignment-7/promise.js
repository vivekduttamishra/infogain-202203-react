
    function isPrime(num) {
        if (num < 2)
            return false;
        for (let i = 2; i < num; i++)
            if (num % i === 0)
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

                }, 1000);

            }, 1000);
        });

    }
    findPrimePromise(10, 50);
