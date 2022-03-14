

function callMe(x,y){
    console.log(`x=${x}\ty=${y}\targuments=${JSON.stringify(arguments)}`);
}

callMe(12,31);

const arr=[2,3,9,2,5];

callMe(arr);

callMe(...arr);