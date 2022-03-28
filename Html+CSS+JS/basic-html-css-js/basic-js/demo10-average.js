

function average(){
    var sum=0;
    var count=0;

    for(var i=0;i<arguments.length;i++){

        if(typeof arguments[i]==="number"){
            sum+=arguments[i];
            count++;
        }

    }

    return sum/count;
}

console.log('average(1,2,3,4)',average(1,2,3,4));

console.log('average(1,2,3,"Hello",4,5)',average(1,2,3,"Hello",4,5));



