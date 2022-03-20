function findPrimes(min, max) {
    var primeNums = [];
    const promise = new Promise(
        function (resolve, reject) {
            setTimeout(() => {
                if (min >= max) {
                    return reject(new Error(`Invalid range. Min ${min} is greater than max ${max}.`));
                }
                let id = setInterval(() => {
                    for (let i = min; i <= max; i++) {
                        let flag = 0;

                        for (let j = 2; j < i; j++) {
                            if (i % j == 0) {
                                flag = 1;
                                break;
                            }
                        }

                        if (i > 1 && flag == 0) {
                            clearInterval(id);
                            primeNums.push(i);
                        }
                    }
                    if (primeNums) {
                        return resolve(primeNums);
                    }
                }, 10);
            }, 10);
        }
    );

    return promise;
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
