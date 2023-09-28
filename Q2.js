// 2. Calculator
// Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
// to perform the operation on the two num#ersQ
// The calculator function should"
// L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
// L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
// L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
// operation and store the result in a varia#le called resultP
// L If the operator is not one of the valid operators, log "Invalid operator" to the consoleQ

function calculator(num1, num2, operator){
    switch(operator){
        case '+' : console.log(num1+num2);
        break;
        case '-' : console.log(num1-num2);
        break;
        case '*' : console.log(num1*num2);
        break;
        case '/' : 
        if (num2 == 0) {
            console.log("Error Division by Zero");
        }else{
            console.log(num1/num2);
        }
        break;
        default: 
        console.log("invalid Operator");
    }
}


let num1 = 20;
let num2 = 10;

let operator = "-"

calculator(num1, num2, operator);