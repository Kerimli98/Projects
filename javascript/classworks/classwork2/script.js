/* TASK - 1
* Get any integer number from user.
* After you get the number, show modal window with message about is number even ot odd.
*/

// let num = parseInt(prompt("Enter integer number"));
// while (isNaN(num)) {
//     num = parseInt(prompt("Enter the valid type"));
// }
// if (num % 2 == 0) {
//     alert("num is even");
// } else
//     alert("num is odd");

// //qisa yol ternary operator ile
// let num = parseInt(prompt("Enter integer number"));
// while (isNaN(num)) {
//     num = parseInt(prompt("Enter the valid type"));
// }
// alert((num % 2===0) ? "even": "odd");
/* TASK - 2
* Ask user in witch language he wants to see the list of the days.
* User can enter only three values, they are - az, en, ru
* Show the list of days on selected language.
* */

// const azeri = "Bazarertesi";
// const russian = "ponedelnik";
// const english = "Monday";
// let lang = prompt("Enter the langauge:");
// if (lang === "az") {
//     alert(azeri);
// } else if (lang === "en") {
//     alert(english);
// } else if (lang === "ru") {
//     alert(russian);
// } else
//     alert("Wrong selection");

//by using switch-case
// switch (lang) {
//     case "en":
//         alert(english);
//         break;
//     case "az":
//         alert(azeri);
//         break;
//     case "ru":
//         alert(russian);
//         break;
// default:
//     alert("Wrong selection");}

/* TASK - 3
* Get the access group name from the user, it can be - 'admin', 'manager' or 'user'.
* And show different message for different access group:
*   - for admin - "Hello, admin!"
*   - for manager - "Hello, manager!"
*   - for user - "Hello, user!"
* */

// let groupName=prompt("Enter the acces group name");
// switch (groupName) {
//     case "admin":
//         alert("Hello, admin!");
//         break;
//     case "manager":
//         alert("Hello, manager!");
//         break;
//     case "user":
//         alert("Hello, user!");
//         break;
//     default:
//         alert("wrong acces group name");
// }

/* TASK - 4
* We can simulate the staff list with the role for each particular member.
* User enters the name of the employee, after that the message with the role of this employee needs to be shown.
* The list is:
* Boss - the main Boss in the building
* Boss Junior - right hand of the Boss
* John Doe - the worker of the month
* Kicky - schedule writer
* */

// let staff = prompt("Enter the name of staff member");
// if(staff==="Boss"){
//     alert("the main Boss in the building");
// }
// else if(staff==="Boss Junior"){
//     alert("right hand of the Boss");
// }
// else if (staff==="John Doe"){
//     alert("the worker of the month");
// }
// else if (staff==="Kicky"){
//     alert("schedule writer");
// }
// else {
//     alert("no employee in this name");
// }
// switch (staff) {
//     case "Boss":
//         alert("the main Boss in the building");
//         break;
//     case "Boss Junior":
//         alert("right hand of the Boss");
//         break;
//     case "john Doe":
//         alert("the worker of the month");
//         break;
//     case "Kicky":
//         alert("schedule writer");
//         break;
//     default:
//         alert("no employee in this name");
// }


/* TASK - 5
* Write a coffee-machine program.
* Program can accept the coins and prepare the drinks (Coffee 3 AZN, cappuccino 4 AZN, herbal tea 2 AZN).
* It means that the user enters the amount of money that he gives in the modal window,
* next - he enters the name of the drink he wants.
* Depending of the drink the user was choose, you need to calculate the change and show the message:
* `Your drink *DRINK_NAME* and change *CHANGE*`
    * If the change equals to 0, show next message: `Yur drink *DRINK_NAME. Thank you for the exact amount of money!*`
* */

// let money = parseInt(prompt("Enter the money:"));
// let nameOfDrink = prompt("Enter the name of drink:");
// let change = 0;
// if (nameOfDrink === "Coffee") {
//     change = money - 3;
//     if (change > 0)
//         alert(`Your drink: ${nameOfDrink} and change: ${change}`);
//     else {
//         alert(`Your drink: ${nameOfDrink} and Thank you for the exact amount of money!`);
//     }
// } else if (nameOfDrink === "Cappuccino") {
//     change = money - 4;
//     if (change > 0)
//         alert(`Your drink: ${nameOfDrink} and change: ${change}`);
//     else {
//         alert(`Your drink: ${nameOfDrink} and Thank you for the exact amount of money!`);
//     }
// } else if (nameOfDrink === "HerbalTea") {
//     change = money - 2;
//     if (change > 0)
//         alert(`Your drink: ${nameOfDrink} and change: ${change}`);
//     else {
//         alert(`Your drink: ${nameOfDrink} and Thank you for the exact amount of money!`);
//     }
// } else {
//     alert("We don't have this drink yet");
//
// }

/* TASK - 1
* User needs to enter name and age.
* If the user entered incorrect data, we need to ask him again and again,
* UNTIL the name and age will be entered correctly.
* Incorrect data is: the number instead of name, letter symbols instead of age
* */
// let name = prompt("What's your name?");
// while (!isNaN(name)) {
//     name = prompt("Enter your name correctly");
// }
// let age = parseInt(prompt("How old are you?"));
// while (isNaN(age)) {
//     age = prompt("Enter your age correctly");
// }
// while(!isNaN(name) ||  isNaN(age)){
//   name = prompt("Please enter your name correctly", name);
//   age = parseInt(prompt("Please enter your age correctly", isNaN(age) ? "" : age));
// }
//


/* TASK - 2
* Show first 147 odd numbers starting from 1.
*   ADVANCED COMPLEXITY - do not show numbers witch can be divided by 5 without residue.
* */
// for(let i=1;i<147*2;i+=2){
//     if(i%5!==0){
//     console.log(i);}
// }



/* TASK - 3
* Create checking for correctness of data entry.
* User should write two numbers and the symbol of the operation.
* If the user entered NOT a numbers, or operations that is not in the list - ask him again and again,
* UNTIL the entered data will be correct.
*  Operations list:
*   * - miltiply
*   + - addition
*   - - subtraction
*   / - dividing
* */
// let a=parseInt(prompt("Enter the first number: "));
// while(isNaN(a)){
//     a=parseInt(prompt("Enter valid type"));
// }
// let b=parseInt(prompt("Enter the second number: "));
// while(isNaN(b)){
//     b=parseInt(prompt("Enter valid type"));
// }
// let operation=prompt("Enter the operation:");
// while(!(operation==="*" || operation==="+" || operation==="-" || operation==="/")){
//     operation=prompt("Enter the correct operation");
// }

/* TASK - 4 calculator
* Ask user to enter two numbers and operation.
* Check for correctness of data entry from the previous task.
* Show the message with the result of calculating this two numbers with
* Display a message with the result of the selected operation on the entered numbers.
*
* ADVANCED_COMPLEXITY:
*     - add more operations to the list -> raising to the power, taking the root of number 1 of the power of number 2.
*     - keep in memory the result of the last operation. If one of two numbers was entered as `PREV_OP`
*      replace the result of last operation instead of thin number.
*     - create a function, which will have three arguments - first number, second number, operation.
*/

// let a=parseInt(prompt("Enter the first number: "));
// while(isNaN(a)){
//     a=parseInt(prompt("Enter valid type"));
// }
// let b=parseInt(prompt("Enter the second number: "));
// while(isNaN(b)){
//     b=parseInt(prompt("Enter valid type"));
// }
// let operation=prompt("Enter the operation:");
// while(!(operation==="*" || operation==="+" || operation==="-" || operation==="/")){
//     operation=prompt("Enter the correct operation");
// }
// if(operation==="+"){
//     console.log(`${a}+${b}=${a+b}`);
// }
// else if(operation==="-"){
//     console.log(`${a}-${b}=${a-b}`);
// }
// else if(operation==="*"){
//     console.log(`${a}*${b}=${a*b}`);
// }
// else {
//     console.log(`${a}/${b}=${a/b}`);
// }
/* TASK - 5
* You have an object like this:*/
let user = {
    name: 'Kenny',
    surname: 'Doe',
    birthDay: '01.12.1988',
    description: 'best men ever',
    pets: {
        name: 'Bob',
        age: 14,
        status: 'dead'
    }
}
/* The task is show all of the properties of this object in console like this:
* PROPERTY_NAME - PROPERTY_VALUE.
* 	TASK-5.1
* 	Same thins with an
* 	Display all of the elements of this array in console.
* 	*/
// for(let items in user)
// {
//     console.log(`${items} - ${user[items]}`);
// }

 //5.1
// let Array =['Gogi', 'Goga', 'Gogo', 'Gugu', 'Gunigugu', 'Guguber', 'Gigi'];
// for(let a of Array)
//     console.log(a);

