

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


function Primes(min, max){
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
console.log(Primes(1, 10));
console.log(Primes(30,50));