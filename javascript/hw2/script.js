let num = parseInt(prompt("Please enter the number"));
while(isNaN(num)){
    num=prompt("Enter the valid number");
}
let count = 0;
for(let i=1;i<=num;i++){
    if(i%5==0){
        count++;
        console.log(i);
    }
}
if(count==0){
    console.log("Sorry, no numbers");
}

// another way

// let num = parseInt(prompt("Please enter the number"));

// while(isNaN(num)){
//     num=prompt("Enter the valid number");
// }
// if (num<5){
//     console.log("Sorry, no numbers");
// }
// for(let i=1;i<=num;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }


























