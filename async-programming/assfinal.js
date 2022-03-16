function findPrimes(min,max){ 

 

    const isPrime= number =>{

        if(number<2)
            return false;
    
        for(let i=2;i<number;i++)
            if(number%i==0)
                return false;
    
        return true;
    
    }

    //should return a Promise 
    
    //promise should be rejected for invalid range  
    
    const p = new Promise ( function(resolve, reject){
       let result=[];
       if(min=max || min>max){
           return reject(new Error("invalid range"));

       }
       else{
       for(let i=min;i<max;i++)
        if(isPrime(i))
            result.push(i);

       return resolve(result);
       }  );
       return p;
       
    }
    
    
    
     
    
     
    
     
    
    async function testFindPrimes(min,max){ 
    
     
    
    try{ 
    
    console.log(`finding primes in range ${min}-${max}`); 
    
    let start=new Date(); 
    
    let primes= await findPrimes(min,max); 
    
    let end=new Date(); 
    
    console.log(`Total primes in range ${min}-${max} is ${primes.length}. \tTotal time taken is ${end-start} ms`); 
    
     
    
    }catch(error){ 
    
     
    
    console.log(error=>console.log(error.message)); 
    
    } 
    
     
    
    } 
    
     
    
     
    
    testFindPrimes(2,200000); //should finish last 
    
     
    
    testFindPrimes(10,1) ; //should finish first with error 
    
     
    
    testFindPrimes(2,1000); //should finish second 