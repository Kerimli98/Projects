let num1 = parseInt(prompt("Please enter first value"));
let num2 = parseInt(prompt("Please enter second value"));
let operator = prompt("Please enter operation");

while(isNaN(num1) || isNaN(num2)){
    num1 = parseInt(prompt("Please enter first value correctly", isNaN(num1) ? "" : num1));
    num2 = parseInt(prompt("Please enter first value correctly", isNaN(num2) ? "" : num2));
}

function implementingOperation(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1+num2;

        case '-':
            return num1-num2;

        case '/':
            return num1/num2;

        case '*':
            return num1*num2;
    }
}

console.log(implementingOperation(num1, num2, operator));