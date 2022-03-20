// //Assignment 4.2

function calculator(v1, v2, operation) {
    switch (operation) {
        case "+":
            return result = v1 + v2;
            break;
        case "/":
            return result = v1 / v2;
            break;
        case "*":
            return result = v1 * v2;
            break;
        case "-":
            return result = v1 - v2;
            break;
        default:
            return("Invalid operator");
    }
}
console.log("Sum", calculator(5, 6, "^"));
console.log("Divi", calculator(8, 2, "/"))
console.log("Mul", calculator(5, 6, "*"))
console.log("Minus", calculator(12, 6, "-"))
