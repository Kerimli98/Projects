/* TASK - 1
* Get several elements from the page, by:
*   tag
*   class
*   identifier
*   CSS selector
*   name attribute
* Use console.dir() method to show up the elements
* */

// let  tag=document.getElementsByTagName("li")[0];
// console.dir(tag);
// let elemClass=document.getElementsByClassName("training-list")[0];
// console.dir(elemClass);
// let elemId=document.getElementById("first-li");
// console.dir(elemId);
// let byName=document.getElementsByName("gogi");
// console.dir(byName);
// let nameAttr=document.querySelector("ul>li");
// console.log(nameAttr);
//
// const list=document.querySelector('.list');
// console.dir(list.getElementsByClassName('training-list')[1]);

/* TASK - 2
* Create a function, that will:
* take an element from the page with class 'training-list', and text content equals 'list-element 5'.
* Show this element in console.
* Replace text content in this element to "<p>Hello</p>" without creating a new HTML element on the page
* Use array methods to complete the task.
* */
//
// function f() {
//     let tList = document.querySelectorAll(".training-list");
//     tList.forEach((item) => {
//             if (item.textContent === "list-element 5") {
//                 item.textContent = "<p>Hello</p>"
//             }
//         }
//     );
// }
//
// f();

/* TASK - 3
* Get an element with class 'remove-me' and remove it from the page.
* Find element with class 'make-me-bigger'. Replace class 'make-me-bigger' to 'active'. Class 'active' already exists in CSS.
* */
// function removeReplace() {
// let removeElem=document.querySelector(".remove-me");
// let replaceElem=document.querySelector(".make-me-bigger");
// removeElem.remove();
//     console.log(replaceElem.classList);
//     replaceElem.classList.replace("make-me-bigger","active");
//     console.log(replaceElem.classList);
// }
//
// removeReplace();

/* TASK - 4
* There is a list of items on the user screen.
* Create a function that will find the 'run out' items, amount of them is equal to 0.
* Replace the 0 inside text content of those elements to 'run out' and change text color to red.
*/

// function findItems() {
// let items=document.querySelectorAll("#storage >li");
// items.forEach(item=>{
//     let spl=item.textContent.split(": ");
//     if(parseInt(spl[1])===0)
// item.innerHTML=`${spl[0]}: <span style="color: red">run out</span>`;
// })
// }
// findItems();

/* TASK - 5
* Create a function, that will ask user what exact item he wants to change.
* User need to write only item name, If there is no matches of user enter in the list
* keep asking until item name will be valid.
* Then ask a new amount of selected item.
* Show data, entered by user in the page.
* Example:
* user entered item name - 'Coffee',
* than entered new amount of it - '17'
* It means that you need to change only amount of 'Coffee' and it needs to be 17 now.
* */
//ede bilmedim yeniden bax
// function changeAmount() {
//     let storageItems = document.querySelectorAll("#storage > li");
//     let userEnteredItem = prompt("Enter the item you want to change: ");
//     storageItems.forEach(elem => {
//         let splittedStorageItems = elem.textContent.split(": ");
//         while (userEnteredItem !== splittedStorageItems[0]) {
//             userEnteredItem = prompt("Enter the valid item name: ");
//         }
//         let newAmount = parseInt(prompt("Enter the new amount of item"));
//         while (isNaN(newAmount)) {
//             newAmount = parseInt(prompt("Enter the valid number"));
//         }
//         elem.textContent = `${splittedStorageItems[0]}: ${newAmount}`;
//     });
//
//     return storageItems;
//
// }
//
//
// console.log(changeAmount());


/* TASK - 6
* Create an empty list on the page, and write a function that will be creating new list items.
* Ask user the text content of the list item again and again, until user will write 'last one'.
* */
//alinmadi sorush
// let newList=document.createElement('ul');
// document.body.appendChild(newList);

// function createListItems() {
// let listItem=document.createElement('li');
//
// while(listItem.textContent!=='last one'){
//     listItem.textContent=prompt("Enter the text content");
// }
// }
// createListItems();


/* TASK - 1:
* Create a square.
* Ask the user about the size and background color of the square.
* Create an element in JS
* Ask the size.
* Ask the background color.
* Add the styles to the element in JS
* Place the element BEFORE fist script tag in your page
* */
// const square = document.createElement('div');
// let size = prompt("What will be a size");
// let backgroundColor = prompt("What will be a backgroundColor");
//
// square.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${backgroundColor};`;
//
// document.querySelector("script").before(square);

/* TASK - 2
* Create two squares, using the same way that described in previous task.
* But this squares will have a different background colors.
* Create two elements in JS
* Ask the user about the size for both of this squares
* Ask the user about fist background color
* Ask the user about second background color
* Add the styles to both squares
* Place both squares BEFORE the first element with the script tag
* */

// const square1=document.createElement('div');
// const square2=document.createElement('div');
// let size=prompt("what will be size of these squares?");
// let bgcolor1=prompt("First square color: ");
// let bgcolor2=prompt("Second square color: ");
// square1.style.cssText=`width: ${size}px; height: ${size}px; background-color: ${bgcolor1};`;
// square2.style.cssText=`width: ${size}px; height: ${size}px; background-color: ${bgcolor2};`;
// document.querySelector("script").before(square1,square2);

/* TASK - 3
* Rewrite TASK-2.
* Ask user the amount of rectangles that will be created and the background color for all of them.
* Create a CSS class with the basic properties: width: 200px; height: 200px; margin: 5px
*
* Ask the number of the rectangles
* Ask the background color
* Create a loop, where inside the each iteration:
*   create a rectangle
*   add class created in CSS
*   add background color
*   append the element on the page BEFORE the first element with the tag script
*/
// let numberOfRectangles=prompt("Enter the number of rectangles");
// let color=prompt("Enter the color");
//
// for(let i=0;i<numberOfRectangles;i++){
//     let rectangle=document.createElement("div");
//     rectangle.style.cssText="width: 200px; height:200px; margin: 5px;";
// rectangle.style.backgroundColor=`${color}`;
//     document.querySelector("script").before(rectangle);
//
// }

/* TASK - 4:
* Create a chess desk. Div container for it has to ba on the HTML by default and has id='chess'.
* Create a class for basic styles of the desk cells: display:inline-block; width:150pxl height:150px; margin:0;
* User set the size of the desk and the two colors for it.
* Ask the size of the desk - it has to be a even number, so add the correctness checking
* Change the size of the desk container, that will fit the amount of cells.
* Ask the color for "white" cells
* Ask the color for "black" cells - it can't be the same, add the checking for this.
* Create a document fragment
* Create a loop, inside the each iteration you will:
*   create a rectangle
*   add the class with basic js properties
*   add the correct background color for this particular cell
*   append this rectangle into a document fragment
* After the loop:
*   append the document fragment as a child element inside the chess desk container
* */
let numberOfSquares = prompt("Please enter even number of square for chess board");
let bgc = prompt("Please enter backround color","blue");
let bgc1 = prompt("Please enter second backround color","red");
let div= document.createElement("div");
div.css.width = `${numberOfSquares*160}px`;
const script = document.querySelector("script");
script.before(div);



for (let j = 0; j < numberOfSquares; j++) {
    for (let i = 0; i < numberOfSquares/2; i++) {
        if(j%2===0){
        const square = document.createElement("div");
        square.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
        square.css.backgroundColor = `${bgc}`;
        const square1 = document.createElement("div");
        square1.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
        square1.css.backgroundColor = `${bgc1}`;
            div.append(square);
            div.append(square1);
        }
        else{
            const square = document.createElement("div");
            square.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square.css.backgroundColor = `${bgc1}`;
            const square1 = document.createElement("div");
            square1.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square1.css.backgroundColor = `${bgc}`;
            div.append(square);
            div.append(square1);
        }

    }
}
/* TASK - 5:
* Add the figures placement into your chess desk.
* Set the constant chess size equal to 8x8.
* Steel asking the colors.
* And now you need to check the ability to add the images for first two and last two rows.
* Cells inside the first two rows needs to contain the rhombus with ane size and color
* Cells inside the last two rows needs to contain the circle with ane size and color
*/
let numberOfSquares = 8;
let bgc = prompt("Please enter backround color", "blue");
let bgc1 = prompt("Please enter second backround color", "red");
let div = document.createElement("div");
div.css.width = `${numberOfSquares * 160}px`;
const script = document.querySelector("script");
script.before(div);

for (let j = 0; j < numberOfSquares; j++) {
    for (let i = 0; i < numberOfSquares / 2; i++) {
        if (j % 2 === 0) {
            const square = document.createElement("div");
            square.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square.css.backgroundColor = `${bgc}`;
            const square1 = document.createElement("div");
            square1.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square1.css.backgroundColor = `${bgc1}`;
            if (j === 0 || j === 1) {
                const innerSquare = document.createElement("div");
                const innerSquare1 = document.createElement("div");
                square.append(innerSquare);
                square1.append(innerSquare1);
                innerSquare.css.transform = "rotate(45deg)";
                innerSquare1.css.transform = "rotate(45deg)";
                innerSquare.css.width= "75px";
                innerSquare.css.height= "75px";
                innerSquare1.css.width= "75px";
                innerSquare1.css.height= "75px";
                innerSquare1.css.backgroundColor="white";
                innerSquare.css.backgroundColor="white";
            }

            if (j === 6 || j === 7) {
                const innerSquare = document.createElement("div");
                const innerSquare1 = document.createElement("div");
                square.append(innerSquare);
                square1.append(innerSquare1);
                innerSquare.css.borderRadius = "50%";
                innerSquare1.css.borderRadius = "50%";
                innerSquare.css.width= "75px";
                innerSquare.css.height= "75px";
                innerSquare1.css.width= "75px";
                innerSquare1.css.height= "75px";
                innerSquare1.css.backgroundColor="white";
                innerSquare.css.backgroundColor="white";
            }
            div.append(square);
            div.append(square1);
        } else {
            const square = document.createElement("div");
            square.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square.css.backgroundColor = `${bgc1}`;
            const square1 = document.createElement("div");
            square1.css.cssText = `width: 150px; height: 150px; margin: 5px; display: inline-block`;
            square1.css.backgroundColor = `${bgc}`;
            if (j === 0 || j === 1) {
                const innerSquare = document.createElement("div");
                const innerSquare1 = document.createElement("div");
                square.append(innerSquare);
                square1.append(innerSquare1);
                innerSquare.css.transform = "rotate(45deg)";
                innerSquare1.css.transform = "rotate(45deg)";
                innerSquare.css.width= "75px";
                innerSquare.css.height= "75px";
                innerSquare1.css.width= "75px";
                innerSquare1.css.height= "75px";
                innerSquare1.css.backgroundColor="white";
                innerSquare.css.backgroundColor="white";
            }

            if (j === 6 || j === 7) {
                const innerSquare = document.createElement("div");
                const innerSquare1 = document.createElement("div");
                square.append(innerSquare);
                square1.append(innerSquare1);
                innerSquare.css.borderRadius = "50%";
                innerSquare1.css.borderRadius = "50%";
                innerSquare.css.width= "75px";
                innerSquare.css.height= "75px";
                innerSquare1.css.width= "75px";
                innerSquare1.css.height= "75px";
                innerSquare1.css.backgroundColor="white";
                innerSquare.css.backgroundColor="white";
            }
            div.append(square);
            div.append(square1);
        }
    }
}



function ChessBoard(sizeOfBoard) {
    this.size = sizeOfBoard;

}

function BoardItem(x,y,element) {
    this.x = x;
    this.y = y;
    this.element = element;
}

let sizeOfBoard = 8;
const chessBoard = [];
const chess = new ChessBoard(sizeOfBoard);

for(let i=0;i<sizeOfBoard;i++){
    for (let j = 0;j<sizeOfBoard;j++){
        chessBoard.push(new BoardItem());
    }
}

