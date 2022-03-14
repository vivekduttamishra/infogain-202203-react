function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}

function average(...numbers){
    return sum(...numbers)/numbers.length;
}

console.log('average(1,3,4,2,5)',average(1,3,4,2,5)); //3





