

function findprime(a, b) { 
    var arr = []; 
    for (var i = a; i <= b; i++) { 
        if (isprime(i)) { 
            arr.push(i); 
        } 
    } 
    console.log(arr) 
    return arr; 
} 
function isprime(num) { 
    var bl = true; 
    if (num < 2) 
        return false; 
    else { 
        for (var i = 2; i < num; i++) { 
            if (num % i == 0) { 
                bl = false; break; 
            } 
        } 
    } 
    return bl; 
} 
console.log(isprime(23))
console.log(findprime(1,10))
console.log(findprime(20,40))