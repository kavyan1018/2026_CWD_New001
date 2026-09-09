let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));

let op = prompt("Enter operator (+, -, *, /, %):");

switch (op) {

    case "+":
        console.log("Addition =", a + b);
        break;

    case "-":
        console.log("Subtraction =", a - b);
        break;

    case "*":
        console.log("Multiplication =", a * b);
        break;

    case "/":
        console.log("Division =", a / b);
        break;

    case "%":
        console.log("Remainder =", a % b);
        break;

    default:
        console.error("Invalid Operator !!!");
}