


function work(id, times){
    for(i=0;i<times;i++){
        console.log('worker #'+id+" working "+i);
    }
}



function schedule(workerCount,workCount)
{

    for(i=0;i<workerCount;i++){
        work(i, workCount)
    }
}

schedule(10, 4);