function Calculate(a, b, c) {
    if (op === '+')
        return a + b;
     else if (op === '-')
        return a - b;
else if(op==='*')
    return a*b;
else if (op==='/')
    return a/b;
else
        console.log("Enter the valid operation")
}

let first = parseInt(prompt("First number pls:"));
while(isNaN(first)){
    first=parseInt(prompt("Enter the valid number!"))
}
let second = parseInt(prompt("Second number pls:"));
while(isNaN(second)){
    second=parseInt(prompt("Enter the valid number!"))
}
let op = prompt("Enter the operation");
console.log(Calculate(first, second, op));