//Assignment 14.1 working with calculator to support +, -, *, /

// //Assignment 4.2

function calc(num1, num2, operation) {
    switch (operation) {
        case "+":
            return result = num1 + num2;
            break;
        case "/":
            return result = num1 / num2;
            break;
        case "*":
            return result = num1 * num2;
            break;
        case "-":
            return result = num1 - num2;
            break;
        default:
            return("Invalid operator");
    }
}
console.log("Sum", calc(5, 6, "^"));
console.log("Divi", calc(8, 2, "/"))
console.log("Mul", calc(5, 6, "*"))
console.log("Minus", calc(12, 6, "-"))