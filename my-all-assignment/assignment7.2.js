// Write a function   to check if a given number is prime or not  isPrime 
// A prime number is not divisible by any number between 2 - (n-1) 
// isPrime(29) ; //—> true 
// isPrime(39); //—> false 

// Also write another function that can return an array of prime between a given min-max range 
// findPrimes ( 1, 10) ;   // [2,3,5,7 ] 
// findPrimes(20,40) ; // [23, 29, 31, 37] ; 
// How many primes are there between 2 and 500000? 

function isPrime(val){
    flag = true;
    for (var i = 2; i <= val-1; i++){
        if(val % i == 0){
            flag = false;
        }
    }
    if(flag == true){
        console.log(val + "is prime")
    }else{
        console.log(val + "is not prime")
    }
}

isPrime(29);
isPrime(42);


function findPrimes(min, max){
    var arr =[];
    var prime = [];
    for (i =2; i <= max; i++){
        if(!arr[i]){
            if (i >= min){
                prime.push(i);
            }
            for (j=1 << 1; j <= max; j += i){
                arr[j] = true;
            }
        }
    }
    return prime;
}
// console.log(prime);
console.log(findPrimes(1, 10));
console.log(findPrimes(20,40));