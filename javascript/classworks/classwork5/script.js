/*TASK 0
* Write a function customCharAt(string,index)
* string - source string
* index - the index of the particular character of the string that we need
* Return value: the character itself, that is placed on the specific index
* */
//1st way
// function customCharAt(str,index){
//     return str.charAt(index);
// }
//
// console.log(customCharAt("fatima",3));

//2nd way
// function customCharAt(str,index) {
// if(str.length>0 && index<str.length){
// return str[index];}
// else{
//     return "error";
// }
// }
// console.log(customCharAt("fatima",3));
/*TASK 1
* Ask a string from the user and turn all of the odd characters of this string in to UPPERCASE
*/

// function oddToUpperCase(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 !== 0) {
//             result += str[i].toUpperCase();
//         } else {
//             result += str[i];
//         }
//     }
//     return result;
// }
// let nese = prompt("Enter a word that came to your mind right now");
// console.log(oddToUpperCase(nese));

/* TASK 2
* Create a function cutMexLength(string, maxlength)
* You need to cut the exact number of characters(maxLength) from source string.
* Return value:
*       if the number of the characters in source string is bigger then maxLength - the string that has been cut
*       if the number of the characters in source string is smaller then maxLength - the source string itself
*/
// function cutMaxLength(str,maxLength) {
// if(str.length>maxLength){
//     return  str.substring(0,maxLength);
// }
// else
//     return str+"...";
// }
// console.log(cutMaxLength("salam",6));
// console.log(cutMaxLength("salam",3));

/* TASK 3
* Create a function getDayAgo(numberOfDays)
* Its needs to return a name of the weekday, that was numberOfDays days before.
*/
// const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
// ];
// function getDayAgo (numberOfDays) {
//     const date = new Date(); //To create a new instance of the Date object, use the new keyword
//     let currentDay =date.getDate(); //The getDate() method returns the current day of the month (1-31).
// date.setDate(currentDay - numberOfDays); //if you want to set a date to the 15th of the month, you can use setDate(15)
//     return  days[date.getDay()]; //getDay: Gets day of the week (0-6) according to local time.
// }
//
// console.log(getDayAgo(2));

/*TASK 4
* Create a function that takes string with date 'DD/MM/YYYY' as an argument.
* Return value: number of weekday of the first day of this month
* Create the same function for getting the number of the last weekday of the month
* */
// const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
// ];
// function firstWeekDay(dateString) {
//     const date= new Date(dateString);
//     date.setDate(1);
//     return days[date.getDay()];
// }
//
// console.log(firstWeekDay('2020-07-12'));


//Advanced task THE TASK IS:
// * Create a calculator that has input string like this:
// * "1/3 + 5/3"
// * The output in this case needs to be - 2.
// * You need to support 3 operations, they are: + - and *
// * More examples:
// * Input: "1/7 * 3/5". Output: "3/35"
// * Input: "2/6 * 8/4". Output: "2/3"
// */
// function parseInput(str){
//     let num1;
//     let num2;
//     let operator;
//     let flag = 0;
//     for(let i = 0; i<str.length; i++){
//         if(str.charAt(i)==="+" ||str.charAt(i)==="-" ||str.charAt(i)==="/" ||str.charAt(i)==="*"){
//             operator=str.charAt(i);
//             flag=i;
//             break;
//         }
//     }
//     num1 = str.substring(0, flag);
//     num2 = str.substring(flag+1, str.length);
//     return {
//         num1,
//         num2,
//         operator
//     };
// }
//
//
// console.log(parseInput("45/30 * 30/12"));

/* TASK 5
* You have an object of a storage
* Create a method getAmount(goodsList), that takes a string with the list of goods.
* Return value: a modified string, that has next format for each good - 'goodName: amountOfThisGoodInStorage'
*
* In case if there is no good with this name in storage, place 'not found' instead of amount.
*
* Your program doesn't need to be case sensitive.
* It means that the 'pIneAPple' needs to be the same as 'pineapple'
*
* 	ADVANCED COMPLEXITY:
*           add the grouping by categories to the storage with any representation.
*           add 2-3 categories of goods with 4-5 good in each category
*           add the third argument in the function. If it exists - search in particular category, if there is no third argument - search everywhere
*/
// const Storage = {
//     eatable: {
//         apple: 8,
//         beef: 162,
//         banana: 14,
//         chocolate: 0,
//         cheese: 0
//     },
//
//     drinkable: {
//         milk: 2,
//         water: 16,
//         coffee: 0,
//         blackTea: 13,
//     }
//
// };
//
// function getAmount(goodList){
//
//     let goods = (goodList.toLowerCase()).split(", ");
//     let flag = 0;
//     let result = "";
//     for(goodsName of goods) {
//         for (let category in Storage) {
//             if (Storage[category][goodsName] > 0) {
//                 result += `${goodsName}: ${Storage[category][goodsName]}, `;
//                 flag = 1;
//             }
//             else if (Storage[category][goodsName] === 0) {
//                 result += `${goodsName}: Run out of supplies, `;
//                 flag=1;
//             }
//             else
//                 flag = 0;
//         }
//         if (flag === 0){
//             result += "Not Found, ";
//         }
//     }
//     return result;
// }
//
// console.log(getAmount("Apple, CHEESE, milk"));


























