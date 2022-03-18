function average(...inputs) {
    let avg = 0;
    let sum = 0;
    for(const input of inputs){
        sum += input;
        count= inputs.length;
    }
    avg = sum / count;
    return avg;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());
