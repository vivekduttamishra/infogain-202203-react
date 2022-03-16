function calculator(num1, num2, op) {
    var output;
    if (op === '+') {
        output = num1 + num2;
    } else if (op === '-') {
        output = num1 - num2;
    } else if (op === '*') {
        output = num1 * num2;
    } else if (op === '/') {
        output = num1 / num2;
    }
    return output;
}

console.log(calculator(1, 5, '+'));
console.log(this.name);
