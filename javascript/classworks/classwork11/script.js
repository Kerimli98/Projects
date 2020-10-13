const gogi = document.querySelector('.gogi');
gogi.addEventListener('click', (event) => {
    console.log('currentTarget - ', event.currentTarget);
    console.log('target - ', event.target);
}, true);


// There is some `mailStorage` - a little simulation of real storage with email letters.
// const mailStorage = [
//     {
//         subject: "Hello world",
//         from: "gogidoe@somemail.nothing",
//         to: "lolabola@ui.ux",
//         text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//     },
//     {
//         subject: "How could you?!",
//         from: "ladyboss@somemail.nothing",
//         to: "ingeneer@nomail.here",
//         text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//     },
//     {
//         subject: "Acces denied",
//         from: "info@cornhub.com",
//         to: "gogidoe@somemail.nothing",
//         text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
//     }
// ];
//
// /*** THE TASK IS ***
//  * 1) Show up this all the letters on the screen, using only JS creating elements.
//  *    Every letter has hidden text. Text needs to be shown, only after the user clicks on the letters item.
//  *    It is necessary to use only one event listener for container with letters.
//  *
//  * 2) Implement toggle text effect. It means that only one text on only letter can be showed at the same time.
//  *    If user made a click on the letter, which doesn't has showed text - you need to close current opened text, and only then open the text for the letter that was just clicked.
//  *
//  * 3) Create "New Mail" button. After pressing this button user need to see a modal window with the form for create mew email letter.
//  *    Fields for this form are: Email Title, To (email of the recipient), letter text (up to 500 symbols), "Send" button. By the way, you need automatically fill the 'from' property for each letter, and it will be "gogi@gogimail.go".
//  *    If user want to close the modal window, he can do this, by clicking on the cross sign at the top right corner of the modal window.
//  *    Modal window size is 500px both width and height. It shows up at the bottom right corner of the page, user can get access to any other part of functionality while modal window is showing.
//  *
//  * 4) Every letter needs to have a "Delete button, which will delete this particular letter both from the page and from the mailStorage.
//  * */
//
// const mailContainer = document.createElement('div');
// mailContainer.classList.add('mail-container');
//
// function showText(target) {
//     const allChildElems = [...target.children];
//     const textToShow = allChildElems.find(item => {
//         return item.classList.contains('mail-item-text');
//     });
//     const allTextOnPage = mailContainer.querySelectorAll('.mail-item-text');
//
//     allTextOnPage.forEach(text => {
//         if(text === textToShow) {
//             textToShow.hidden = !textToShow.hidden;
//         } else {
//             text.hidden = true
//         }
//     })
// }
//
// mailContainer.addEventListener('click', (event) => {
//     if (event.target.classList.contains('mail-item')) {
//         showText(event.target);
//     } else {
//         showText(event.target.parentElement);
//     }
// });
//
// document.querySelector('script').before(mailContainer);
//
// mailStorage.forEach((mailItem) => {
//     const letterContanier = document.createElement("div");
//     const letterSubject = document.createElement("h3");
//     const letterFrom = document.createElement("span");
//     const letterTo = document.createElement("span");
//     const letterText = document.createElement("p");
//     const deleteBtn = document.createElement('button');
//
//     letterContanier.classList.add('mail-item');
//     letterSubject.classList.add('mail-item-subject');
//     letterFrom.classList.add('mail-item-from');
//     letterTo.classList.add('mail-item-to');
//     letterText.classList.add('mail-item-text');
//     deleteBtn.classList.add('mail-item-delete');
//
//     letterSubject.innerText = mailItem.subject;
//     letterFrom.innerText = mailItem.from;
//     letterTo.innerText = mailItem.to;
//     letterText.innerText = mailItem.text;
//     deleteBtn.innerText = "Delete";
//
//     letterText.hidden = true;
//
//     deleteBtn.onclick = (event) => {
//         const itemToDelete = mailStorage.find((item) => {
//             return item.subject === letterSubject.textContent
//                 && item.from === letterFrom.textContent
//                 && item.to === letterTo.textContent
//                 && item.text === letterText.textContent
//         });
//         mailStorage.splice(mailStorage.indexOf(itemToDelete), 1);
//         letterContanier.remove();
//     };
//
//     letterContanier.append(deleteBtn, letterSubject, letterFrom, letterTo, letterText);
//
//     mailContainer.append(letterContanier);
// });
