import { findPrimes } from "./utils/prime";


let minBox =  document.getElementById('min');
let maxBox=  document.getElementById('max');
let consoleArea=document.getElementById('console');


async function handleFindPrimes(){
	console.log('finding primes...');
	let min= + minBox.value;
	let max= + maxBox.value;

	let primes = await findPrimes(min,max);

	consoleArea.innerHTML+=(`<p>total primes between ${min}-${max} is ${primes.length}`);
}

document.getElementById("findPrimes").addEventListener("click", handleFindPrimes);