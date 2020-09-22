/* Rewrite first three tasks from the previous lesson, using arrow functions*/

/* TASK - 1
* Create sum() function.
* Arguments: two integer numbers
* Return value: sum of two arguments
* */
// const sum=(num1,num2)=>num1+num2;
// console.log(sum(5,10));

/* TASK - 2
* Write a functions, that will be counting from start to end of range.
* Arguments: start of the range, and of the range
*/
// const count=(start,end)=>{
//     for(let i=start;i<=end;i++){
//         console.log(i);}
// };
// console.log(count(5,10));

/* TASK - 3
* Write a function, that will sum up all the arguments passed into it.
* */
// const sumALL=(...args)=>{
//     let sum=0;
//     for(let i=0;i<args.length;i++){      //for(let item of args)
//     sum+=args[i];}
//     return sum;
// };
// console.log(sumALL(4,5,6,8,7));

/* TASK - 4
* Create a function, showMessage(msgText, numberOfShowing)
* Arguments: msg text - is a text of message that will be shown,
* numberOfShowing - the number of times that the message will be shown
* Example: showMessage('Hello', 18) -> will show 'Hello' for the user 18 times
* */
// const showMessage=(msgText,numberOfShowing)=>{
//   for(let i=0;i<numberOfShowing;i++){
//       console.log(msgText);
//   }
// };
// showMessage("naneli",17);

/* TASK - 5
* Create Arrow function, that returns maximum value from all of the arguments that was passed.
* The number of arguments can be any. We need to return the biggest one.
* */
//easy one
// const Maxi=(...args)=> Math.max(...args);
// console.log(Maxi(1,2,3,4,5));

//long one
// const maximumValue = (...args) => {
//     let max = Number.MIN_SAFE_INTEGER;
//     for (arg of args){
//         if (arg>max){
//             max=arg;
//         }
//     }
//     return max;
// };
//
// console.log(maximumValue(1, 2, 3, 4, 2, 10, 6));

/* TASK - 6
* Rewrite calculator() function, into the Arrow functions, with a new features:
*
* Each operation has its own function.
* That means - we will have sum(a,b) for summing, multiple(a,b) for multiplying and so on.
* Each of this functions need only two arguments,
* and returns only the result of the operation with this two numbers
* If the function hasn't receive any of two arguments, assign 0 as a default value.
*
* The calculate() functions will be the main one.
* Is takes three arguments:
*   1 - integer number
*   2 - integer number
*   3 - the function needs to be used for this two numbers
* So we have a picture like this:
* the main function inside itself will call the function with the operation.
* This construction is useful, if we need to do some operations with numbers before calculating.
* */

// function Calculator () {
//     this.sum = (...args) => {
//         let result = 0;
//         for (item of args) {
//             result += item;
//         }
//         return result;
//     };
//     this.multiply = (...args) => {
//         let result = 1;
//         for (item of args) {
//             result *= item;
//         }
//         return result;
//     };
//     this.subtract = (subtractable, ...args) => {
//         let result = subtractable;
//         for ( item of args) {
//             result -= item;
//         }
//         return result;
//     };
//     this.division = (divisible, ...args) => {
//         let result = divisible;
//         for ( item of args) {
//             result /= item;
//         }
//         return result;
//     };
// };
// const sum = (a = 0, b = 0) => a + b;
// const multiply = (a = 0, b = 0) => a * b;
// const subtract = (a = 0, b = 0) => a - b;
// const division = (a = 0, b = 0) => a / b;
//
//
// let calculator1 = new Calculator();
// console.log(calculator1.sum(5, 3, 2));
// console.log(calculator1.division(100,2,5,2));
// console.log(calculator1.subtract(25,5,5,5));












