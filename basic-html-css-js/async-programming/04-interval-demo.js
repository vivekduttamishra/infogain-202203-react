

let max=10;


const iid= setInterval( ()=>{
    console.log(max);
    max--;
    
},1000);  //do it after every second.

let check=0;
const iid2 = setInterval( ()=>{

    check++;
    if(max<=0){
        clearInterval(iid);
        clearInterval((iid2));
        console.log("count down stopped after ",check);
    }

}, 100);  //checks every 100ms


console.log("count down begins");
