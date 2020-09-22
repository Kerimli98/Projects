/* TASK - 1
* Create a function, that do not receive any arguments
* it will only ask the user what dishes does he prefer to eat on breakfast.
* User can enter only one dish at one time, so you need to ask him UNTIL he will enter 'end'.
* Each dish needs to be placed into an array.
* Return value: array with all of the dishes.
* */
// function breakfast() {
//     let dishes = prompt("What dishes do you prefer to eat on breakfast?");
//     const dishesArray = [];
//     while (dishes !== "end") {
//         dishesArray.push(dishes);
//         dishes = prompt("What dishes do you prefer to eat on breakfast?");
//     }
//     return dishesArray;
// }
//  //console.log(breakfast());
/* TASK - 2
* Create a function, that will takes one argument - array from the previous task result.
* The task is to show every dish from the array in console, and also you need to delete it from source array.
* After all of the dishes will be shown on the console, array must be empty.
* */
// function showDishes() {
//     const arr= breakfast().reverse();
//     for (let i=0; i<arr.length; i++){
//         console.log(arr.pop())
//     }
//     console.log("Dishes after function");
// }
// showDishes();

/* TASK - 3
* Create a function, that will receive array as an single argument.
* return value: new array, that will be exact copy of the source one.
* Task needs to be done using: for, map(), spread operator. It means three realisations.
*/
//with for
// function copyArr(arr) {
// let newArr=[];
// for(let i=0;i<arr.length;i++){
//     newArr[i]=arr[i];
// }
// return newArr;
// }
// console.log(copyArr([1,2,3,4,5,6]));

//with map
// function copyArr(arr) {
//     return arr.map((elem) => elem);
// }
//
// console.log(copyArr([1,2,3,15,455,6]));
// genish formasi ashagida
// function copyArray(arr) {
//     const callbackFunc = (elem) => {
//         return elem;
//     };
//     const newArray = arr.map(callbackFunc);
//     return newArray;
// }
// // console.log(copyArr([1,2,3,15,455,6]));

//with spread operator
// function copyArr(arr) {
// let newArr=[...arr];
// return newArr;
// }
//
// console.log(copyArr([1,24,6,55757,35]));

//with push and for
// function copyArr(arr) {
//     const newArr = [];
//     for (let i of arr) {
//         newArr.push(i);
//     }
//     console.log(arr === newArr);
//     return newArr;
// }
//
// console.log(copyArr([1, 3,8, 434, 54, 7, 6, 3]));

/* TASK - 4
* Create function getItemList(), that has to receive string from the user with the names of the items, separated by the ', '.
* Items in the users string can be repeated.
* User string needs to be transformed into an array with unique values.
*/
// function getItemList(str) {
//     let setArray = new Set();
//     let newArr = [];
//     newArr = str.split(', ');
//     for (let item of newArr) {
//         setArray.add(item);
//     }
//     return setArray;
// }
//
// console.log(getItemList('salam, men, fatima, kerimli, salam, men, fatima'));

//short version
// function getItemList(str) {
//     const newArr = string.split(', ');
//     const setArray = new Set(newArr);
//     return Array.from(setArray);
// }

/* TASK - 5
* There is a Storage, represented with an array from the previous task.
* User needs to replace one item with one or several values.
*
*
* So we need to write a function replaceItems(insteadOf, insertValue), where:
* insteadOf - the name of the item that needs to be replaced
* insertValue - one or more values that needs to be placed in array
* ITS REQUIRED to check is the insteadOf item presented in the source array.
*/


// const Storage = ["salam", "aleykum", "yeah", "test"];
//
// function replaceItems(insteadOf, ...insertValue) {
//     Storage.splice(insteadOf, 1, ...insertValue);
//     return Storage;
// }
//
// console.log(replaceItems('yeah', 'fatima', 'annoying'));

/* TASK - 6
* You have a userList. Each user inside it is represented by an object
* Each user has: fullName, birthDate and array with pets.
* Create a function that receives a userList as an argument
* and shows in console for different arrays:
*   1 - users that have a cats
*   2 - users that have a dogs
*   3 - users that have a dead pets
*   4 - users that have a pet no pets AND are older then 18 years
* */

const USER_LIST = [
    {
        fullName: 'Gogi Doe',
        birthDate: '22/02/1998',
        pets: [
            {
                name: 'Doggidog',
                type: 'dog',
                status: 'alive'
            }
        ]
    },
    {
        fullName: 'Gogi1 Doe1',
        birthDate: '20/12/1996',
        pets: [
            {
                name: 'Cattycat',
                type: 'cat',
                status: 'alive'
            }
        ]
    },
    {
        fullName: 'Mister Nowho',
        birthDate: '20/12/1988',
        pets: [
            {
                name: 'Cattycat',
                type: 'iguana',
                status: 'dead'
            }
        ]
    },
    {
        fullName: 'Missis Nowho',
        birthDate: '20/08/1964',
        pets: [
            {
                name: 'Piter',
                type: 'spider',
                status: 'alive'
            }
        ]
    },
    {
        fullName: 'Helen Shmelen',
        birthDate: '17/08/1999',
        pets: [
            {
                name: 'Princess',
                type: 'peace of devil',
                status: 'dead'
            }
        ]
    },
    {
        fullName: 'John Doe',
        birthDate: '19/03/2002',
        pets: [
            {
                name: 'Lord',
                type: 'dog',
                status: 'alive'
            },
            {
                name: 'Gogi',
                type: 'koala',
                status: 'dead'
            }
        ]
    },
    {
        fullName: 'Georgina Doe',
        birthDate: '06/01/2000',
        pets: [
            {
                name: 'Koko',
                type: 'parrot',
                status: 'alive'
            },
            {
                name: 'Horhe',
                type: 'dog',
                status: 'alive'
            },
            {
                name: 'Piggy',
                type: 'pig',
                status: 'dead'
            }
        ]
    },
    {
        fullName: 'Nonamed Stranger',
        birthDate: '06/01/2000',
        pets: []
    },
    {
        fullName: 'Named Stranger',
        birthDate: '06/01/2000',
        pets: []
    },
];


const catUsers=(user)=>user.pets.some(pet=>pet.type==="cat");
console.log(USER_LIST.filter(catUsers));

const dogUsers=(user)=> user.pets.some( pet => pet.type === "dog");
console.log(USER_LIST.filter(dogUsers));

const deadPets=(user)=> user.pets.some( pet => pet.status === "dead");
console.log(USER_LIST.filter(deadPets));

const noPet=(user)=>user.pets.length===0 && 2019-parseInt(user.birthDate.split('/')[2])>18;
console.log(USER_LIST.filter(noPet));

function noCatOlder22(user){
    return ( ( ( 2019-(parseInt( (user.birthDate.split('/'))[2])) ) > 22 ) && (!user.pets.some( pet => pet.type === "cat" )) );
}
console.log(USER_LIST.filter(noCatOlder22));





