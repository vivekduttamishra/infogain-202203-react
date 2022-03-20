//Assignment4.1
function average() {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum = sum + arguments[i];
        } else {
            arguments.length -= 1;
        }
    }
    avg = sum / arguments.length;
    return avg;
}

console.log(average(2, 3));
console.log(average(2, 3, 9, 8, 11, 4, 2));
console.log(average(1, 2, 3, "hello", 4, 5, 6));