

function countDown(max){

    return new Promise(function(resolve, reject){

        const iid= setInterval( ()=>{

            console.log('counting',max);
            max--;
            if(max<0){
                clearInterval(iid);
                resolve();
            }

        },1000);

    });
}

function testCountDown(){
    countDown(10)
    .then(()=>console.log("done"));

    console.log("count down starting...");
}

testCountDown();



