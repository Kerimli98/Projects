/* TASK - 1
* There is an input in the page.
* Write a function that will show the string that user will enter in the input immediately.
* That means every time user has add any  changes to the input string - you need to show them in the span right below the input
*/
// let input=document.createElement('input');
// let span=document.createElement('span');
//
// const showText=function () {
// span.textContent=input.value;
// };
//
// input.addEventListener('keyup',showText);
// document.querySelector('script').before(input,span);


/*  TASK - 2
* Write a function chitCode(word, chitCodeHandler)
* word - the word that user needs to write for letting chit code work needs to be 4 symbols long
* chitCodeHandler - the function that responsible for the chit code behaviour, it will be called after entering the word.
* You need to remember every symbol that was entered, every time the user press any button on the keyboard.
* On every pressing you need to check if the have the mashes, and if its not - reset the entered symbols and start remembering from scratch.
*/
//
// let storedWord = '';
// function chitCode(magicWord, handler) {
//     document.addEventListener('keyup', function (event) {
//         if(magicWord === storedWord.concat(event.key)) {
//             storedWord = '';
//             handler();
//         } else if(magicWord.length <= storedWord.length) {
//             storedWord = '';
//         } else {
//             storedWord += event.key;
//         }
//         console.log('storedValue - ',storedWord);
//         console.log('just pressed- ',event.key);
//     })
// }
// chitCode('semi', () => {console.log('YOU ENTERED semi')});


/* TASK - 3
* Create "live search" on the table.
* You have a table where each row has columns: Name, price, amount;
* There input needs to be added on the page above the table.
* You enter the value of any column and any item of the table.
* And the table need to contain only the rows that have match with entered string in any column.
*/
//not done yet
// let searchInput= document.getElementById("searchInput");
// let item=document.getElementsByClassName('.item');
// let country=document.getElementsByClassName('.country');
// searchInput.addEventListener('keyup',(event)=>{
//     for(let i=0;i<item.length;i++) {
//         if (searchInput.value === item[i])
//             console.log(country[i]);
//     }
// });


/*  TASK - 4 bring some life to pacman
* Pacman need to be moved by the keyboard arrows.
* For example - when you pressing arrow up it moves for 50px up, same for all directions
*/
// const pacmanContainer = document.getElementById('pacmanContainer');
// document.addEventListener('keyup', (event) => {
//     if (event.key === 'ArrowRight') {
//         let left = isNaN(parseInt(pacmanContainer.style.left)) ? 0 : parseInt(pacmanContainer.style.left);
//         if ((left + 260 < window.innerWidth))
//             pacmanContainer.style.left = left + 50 + 'px';
//     } else if (event.key === "ArrowLeft") { //window.inner
//         let left = isNaN(parseInt(pacmanContainer.style.left)) ? 0 : parseInt(pacmanContainer.style.left);
//         if (left - 50 >= 0)
//             pacmanContainer.style.left = left - 50 + 'px';
//     } else if (event.key === 'ArrowUp') {
//         let top = isNaN(parseInt(pacmanContainer.style.top)) ? 0 : parseInt(pacmanContainer.style.top);
//         if (top - 50 >= 0)
//             pacmanContainer.style.top = top - 50 + 'px';
//     } else if (event.key === 'ArrowDown') {
//         let top=isNaN(parseInt(pacmanContainer.style.top))?0: parseInt(pacmanContainer.style.top);
//         if(top+260<window.innerHeight)
//             pacmanContainer.style.top=top+50+'px';
//     }
//
// });

/* TASK - 5
* add a modes to this game
*	1 - one arrow pressing = shift for 25рх. To activate the level you need to press - Ctrl+1
*	2 - one arrow pressing = shift for 50px. To activate the level you need to press - Ctrl+2
*	3 - one arrow pressing = shift for 100рх. To activate the level you need to press - Ctrl+3
* Rotate the pacmen relating to the arrow direction.
* Add checking for size of the screen. It means that the pacman needs always be inside the user screen, without ane scrollbars.
*/


const pacmanContainer = document.getElementById('pacmanContainer');
let mode = 50;

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight') {
        let left = isNaN(parseInt(pacmanContainer.style.left)) ? 0 : parseInt(pacmanContainer.style.left);
        if ((left + 210 + mode < window.innerWidth))
            pacmanContainer.style.left = left + mode + 'px';
        pacmanContainer.style.transform = 'rotate(0deg)'
    } else if (event.key === "ArrowLeft") { //window.inner
        let left = isNaN(parseInt(pacmanContainer.style.left)) ? 0 : parseInt(pacmanContainer.style.left);
        if (left - mode >= 0)
            pacmanContainer.style.left = left - mode + 'px';
        pacmanContainer.style.transform = 'scaleX(-1)';
    } else if (event.key === 'ArrowUp') {
        let top = isNaN(parseInt(pacmanContainer.style.top)) ? 0 : parseInt(pacmanContainer.style.top);
        if (top - mode >= 0)
            pacmanContainer.style.top = top - mode + 'px';
        pacmanContainer.style.transform = 'rotate(270deg)';
    } else if (event.key === 'ArrowDown') {
        let top = isNaN(parseInt(pacmanContainer.style.top)) ? 0 : parseInt(pacmanContainer.style.top);
        if (top + 210 + mode < window.innerHeight)
            pacmanContainer.style.top = top + mode + 'px';
        pacmanContainer.style.transform = 'rotate(90deg)';
    }

    else if (event.key==='1' && event.altKey){
        mode=25;
    }
    else if (event.key==='2' && event.altKey){
        mode=50;
    }
    else if (event.key==='3' && event.altKey){
        mode=100;
    }
});


/* TASK - 6
* Create a start screen of the game:
* There must be no pacmen on the screen, only modal window that will be asking the user
* if he wants to start the game.
* If user chose to start the game - remove modal window and show:
*   pacmen itself
*   the list of game modes, and highlight the current mode with red color and make it text bold.
*   amount of game-points. By default - 0
*
* Add a food. It must be the square, with different background every time, placed randomly
* and when the pacmen position is matches the food position,
* food can disappear, you increase the value of game-points by 1
* and place another food randomly on the page.
*/
