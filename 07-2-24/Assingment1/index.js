function addition(num1, num2) {
    return num1 + num2;
}
function subtraction(num1, num2) {
    return num1 - num2;
}
function multiplication(num1, num2) {
    return num1 * num2;
}
function division(num1, num2) {
    if (num2 === 0) {
        throw Error("Division by zero is not allowed.");
    } else {
        return num1 / num2;
    }
}

function calculator(operator,num1,num2) {
    
        switch (operator) {
            case "+":
                return addition(num1, num2);
            case "-":
                return subtraction(num1, num2);
            case "*":
                return multiplication(num1, num2);
            case "/":
                return division(num1, num2);
        }
    
}

function main() {
    const num1 = parseFloat(prompt("Enter first number: "));
    const num2 = parseFloat(prompt("Enter second number: "));
    const operator = prompt("Enter operator (+, -, *, /): ");

    const result = calculator(operator,num1,num2);;
    alert("The answer is: " + result);
}

main();