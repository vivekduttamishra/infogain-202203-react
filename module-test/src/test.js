import { findPrimes } from "./utils/prime";


const testFindPrimes= async(min,max)=>{

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
