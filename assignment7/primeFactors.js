function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

console.log(isPrime(29));
console.log(isPrime(39));

function primeFactorsTo(min, max) {
    var i, primes = [];
    for (i = min; i <= max; i++) {
        if (isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}

console.log(primeFactorsTo(1, 10));

console.log(primeFactorsTo(20, 40));