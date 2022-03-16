function findPrime(min,max){
    return new Promise(function(resolve,reject) {
        let numbers = []
        setTimeout(() => {
            for (let num = min; num < max; num++){
                count = 0;
                for (let j = 2; j <= num/2; j++) {
                    if(num%j == 0){
                        count++
                        break;
                    }
                }
                if(count == 0 && num != 1)
                {
                    numbers.push(num)
                }
            }
            resolve(numbers)
        }, 1000);

    });
}

async function asyncCall(min,max){

    try {
        console.log('calling');
        const result = await findPrime(min,max);
        console.log(result);
        //expected output: "resolved"
    } catch (error) {
        console.log(error)
    }
}
asyncCall(1,10)
