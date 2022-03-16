function average() {
var total = 0;
var argLen = arguments.length;
for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === 'number') {
    total += arguments[i];
    } else {
        argLen -= 1;
    }
}
var avg = total/argLen;
    return avg;
}

console.log(average(2,3));
console.log(average(2,3,9,8,11,4,2)); 
console.log(average(1,2,3,'Hello',4,5)); 