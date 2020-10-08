/*TASK - 1
* Show alert with message 'This is click', after the click on the 'Click me' button.
*/
// let clickBtn=document.querySelector("#clickMe");
// clickBtn.addEventListener('click', ()=>alert("This is click"));

/*TASK - 2
* Show alert with message 'This is mouseover', after the hover on the 'Click me' button.
*/
// let clickME=document.querySelector("#clickMe");
// clickME.addEventListener('mouseover',()=>alert("This is mouseover"));
//
// let btn = document.getElementById('clickMe');
// let shmtn = document.getElementById('doNotClickMe');
//
// const clickHandler = function (event) {
//          console.log('the context - ',this);
//         console.log('button that was clicked -> ', event.target);
//     let currentWidth = this.offsetWidth;
//     event.target.style.width = currentWidth + 5 + 'px';
// };
// btn.addEventListener('click',clickHandler);
// shmtn.addEventListener('click',clickHandler);

/*TASK - 3
* Create a function, that will be changing the background color of the 100px square randomly,
* by the clicking on it. Every color should be random, transparent and white are not included in the list of colors.
 */
//
// let square = document.querySelector(".will-be-clicked");
// square.style.width = "100px";
// square.style.height = '100px';
// square.style.border='1px solid black';
// const changeColor = function () {
//     let red = Math.random() * 250;
//     let green = Math.random() * 250;
//     let blue = Math.random() * 250;
//     let opacity = Math.random();
//     return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
//
// };
//
// const clickHandler = function (event) {
//     event.target.style.backgroundColor = changeColor();
// }
//
// square.addEventListener('click', clickHandler);

/*TASK - 4
* There is a button 'Change color' next to the 100px square. Create a function, that will change the color of the square randomly, by the clicking on the button, not on the square.
*/
// let square = document.querySelector(".will-be-clicked");
// square.style.width = "100px";
// square.style.border='1px solid black'
// square.style.height = '100px';
// let changeBtn=document.querySelector("#change");
//
// const changeColor = function () {
//     let red = Math.random() * 250;
//     let green = Math.random() * 250;
//     let blue = Math.random() * 250;
//     let opacity = Math.random();
//     return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
//
// };
// const clickHandler=function () {
//     square.style.backgroundColor=changeColor();
//
// };
// changeBtn.addEventListener('click',clickHandler);

/*TASK - 5
* There is an input next to the 100px square.
* Only HEX of the color can be entered in this input. Next to this input - 'Ok' btn is placed and its inactive by default.
* Create a function that will be changing the color.
* After hex is entered 'Ok' button will start to be active and you can press it.
* After pressing the 'Ok' button color needs to be changed.
* Рядом с блоком размером 100рх на 100рх располагается поле
* */
// const changeColorButton = document.getElementById("changeColorButton");
// changeColorButton.disabled=true;
//
// const colorInput = document.getElementById("colorInput");
// colorInput.addEventListener("input", () =>{
//     if(colorInput.value.length>0)
//         changeColorButton.disabled=false;
//     else
//         changeColorButton.disabled=true;
//
// });
//
// changeColorButton.addEventListener("click", function () {
//     const colorChangeDiv = document.getElementById("colorChangeDiv");
//     const colorInput = document.getElementById("colorInput");
//     colorChangeDiv.css.backgroundColor = colorInput.value;
// });
/*TASK - 6
* Create red circle 80px radius.
* Create a function that will be responsible for sticking this circle up to mouse cursor.
* It means that the center of the circle should be placed on the cursor always, even when the mouse moves.
* Add delay to crate an illusion of catch-ups.
* */
//
// document.addEventListener('mousemove',function (event) {
// let circle=document.getElementById("circle");
// circle.style.left=event.pageX+ 'px';
// circle.style.top=event.pageY+ 'px';
// });



/*TASK - 7
* Write a function that will return some random word from the entered string.
* Place textarea, 'Ok' button and an empty span on the page.
* Maxlength of the input string is 958 characters.
* 'Ok' button should be inactive until textarea will have at least one symbol in it.
* After the click on the 'Ok' button - random word from the string
* entered in the textarea needs to be shown as a text inside the span.
* You need to have some pull of already selected words to be sure that your selection has no duplicates.
* */


 const textArea = document.getElementById("textArea");
const randomizer = document.getElementById("randomizer");
const resultSpan = document.getElementById("resultSpan");

randomizer.disabled = true;
let words;

textArea.addEventListener("input", () => {
    if (textArea.value.length > 0)
        randomizer.disabled = false;
    else
        randomizer.disabled = true;
    words = textArea.value.split(" ");
});

randomizer.addEventListener('click', () => {

    let randomWord = getRandomWord();
    resultSpan.innerText=randomWord;
});

function getRandomWord() {
    let random = Math.floor(Math.random() * words.length);
    if (words[random] !== -1) {
        let returnThis = words[random];
        words[random] = -1;
        return returnThis;
    }
    else {
        let flag = 0;
        words.forEach(word => {
            if (word !== -1)
                flag = 1;
        });
        if (flag === 1) {
            // recursion
            return getRandomWord();
        }
        else {
            alert("you have used all words, resetting memory and returning value");
            words = textArea.value.split(" ");
            return getRandomWord();
        }
    }
}



















