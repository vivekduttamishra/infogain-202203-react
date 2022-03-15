
const delay = time => new Promise(resolve => setTimeout(resolve, time));


async function countDown(max){

    while(max>=0){
        await delay(1000);  //wait for 1 second before going to next line
        console.log('counting',max);
        max--;
        
    }
    
}

async function testCountDown(){
    console.log("count down starting...");
    await countDown(10);
    console.log("done");    
}

testCountDown();



