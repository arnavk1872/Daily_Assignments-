
let num1=prompt("Enter First Number:");
let num2=prompt("Enter Second Number:");


let operation=prompt("Choose the operation to be performed:(+,-,*,/)");

num1=parseInt(num1);
num2=parseInt(num2);

switch(operation){
   case "+":
    alert("The summation is"+" "+ (num1+num2));
    break;
    case "-":
        alert("The subtraction is"+" "+ (num1-num2));
    break;
    case "*":
        alert("The multiplication is"+" "+ num1*num2);
    break;
    case "/":
        alert("The divison is"+" "+ num1/num2);
    break;
    
}


