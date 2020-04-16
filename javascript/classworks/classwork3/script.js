/* TASK - 1
* Create a sum function
* Arguments: first number, second number
* Return value: sum of two numbers
*/
// function sum(first,second) {
//     return first+second;
// }
// console.log(sum(10,15));

// to check validity of numbers and then sum them
// function sum(a=0,b=0) {
// a=validNumbers(a);
// b=validNumbers(b);
// return a+b;
// }
// function validNumbers(validNum) {
// if(isNaN(validNum))
// {
//     validNum=0;
// }
// return validNum;
// }
//
// console.log(sum(-2,4));

/* TASK - 2
* Write a function that will take two arguments - the number to start the count and the number to finish it.
* By counting we mean the series of numbers in the console with the increase by one.
*/
// function count(start=0,end=0) {
//     for(let i=start;i<end; i++){
//         console.log(i);
//     }
// }
// count(5,21);

/* TASK - 3
* Write a function that will sum up all the numbers that will be passed to it as arguments.
* */
// let result = 0;
//
// function sumAll() {
//     for (let i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//     }
//     return result;
// }
//
// console.log(sumAll(12, 21, 12, 12, 21, 2));

/* TASK - 4
* Create a function that will check up the number of arguments in it.
* Arguments: three integer numbers
* If the number of arguments is not equal to 3 - display the message:
* "Function called with *ARGUMENTS_LENGTH* arguments!"
* */
//
// function Check() {
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments.length !== 3)
//             console.log(`Function called with ${arguments.length}  arguments!`)
//     }
// }
// Check(12, 2, 3);


/* TASK - 5
* Write the calculateResidue function, which will output ALL numbers in the specified range, which are divisible by the third number.
* Arguments:
*   1) Start point for the range (inclusively)
*   2) End point for the range (inclusively)
*   3) Third number
*   ADVANCED COMPLEXITY:
*     Create a separate function for validation
* */

// function calculateResidue(start = 0, end = 0, third) {
//     start = checkValidity(start);
//     end = checkValidity(end);
//     for (let i = start; i < end; i++) {
//         if (i % third === 0) {
//             console.log(i);
//         }
//     }
// }
//
// function checkValidity(validNum) {
//     if (isNaN(validNum)) {
//         validNum = 0;
//     }
//     return validNum;
// }
// calculateResidue(5, 19, 3);

/* TASK - 6
* Write a getPrice() function, that will calculate the cost of the burger, depending on its size and stuffing.
* The size and stuffing are user-defined. User can enter only the names of constants, i.e. there is no need to check for incorrect data entry.
*
* Sizes and stuffings are written in constants:*/

const SIZE_SMALL = {
    name: 'SIZE_SMALL',
    price: 15,
    cal: 250
};

const SIZE_LARGE = {
    name: 'SIZE_LARGE',
    price: 25,
    cal: 340
};

const STUFFING_CHEESE = {
    name: 'STUFFING_CHEESE',
    price: 4,
    cal: 25
};

const STUFFING_SALAD = {
    name: 'STUFFING_SALAD',
    price: 5,
    cal: 5
};

const STUFFING_BEEF = {
    name: 'STUFFING_BEEF',
    price: 10,
    cal: 50
};

function getPrice(size, stuffing) {
    size = prompt("How should be your burger size?");
    stuffing = prompt("What kind of stuffing would you like?");
    let cost = 0;
    if (size === 'SIZE_SMALL' && stuffing === 'STUFFING_CHEESE') {
        cost = SIZE_SMALL.price + STUFFING_CHEESE.price;
    } else if (size === 'SIZE_SMALL' && stuffing === 'STUFFING_SALAD') {
        cost = SIZE_SMALL.price + STUFFING_SALAD.price;
    } else if (size === 'SIZE_SMALL' && stuffing === 'STUFFING_BEEF') {
        cost = SIZE_SMALL.price + STUFFING_BEEF.price;
    } else if (size === 'SIZE_LARGE' && stuffing === 'STUFFING_SALAD') {
        cost = SIZE_LARGE.price + STUFFING_SALAD.price;
    } else if (size === 'SIZE_LARGE' && stuffing === 'STUFFING_BEEF') {
        cost = SIZE_LARGE.price + STUFFING_BEEF.price;
    } else if (size === 'SIZE_LARGE' && stuffing === 'STUFFING_CHEESE') {
        cost = SIZE_LARGE.price + STUFFING_CHEESE.price;
    }
    return cost;
}

console.log(getPrice());




















