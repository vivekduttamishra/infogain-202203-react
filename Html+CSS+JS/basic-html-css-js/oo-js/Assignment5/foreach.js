// for Number is Prime or not.....
function isPrime(num) { 

    if (num <= 1) return false; 
    if (num % 2 == 0 && num > 2) return false; 
    const s = Math.sqrt(num); 
    for(let i = 3; i <= s; i += 2) { 
        if(num % i === 0) return false; 
    }
    return true;
  }
  console.log(isPrime(39));

// Array of element which is in given range Prime or not..
