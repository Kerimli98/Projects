/* TASK - 1
* Write showMsg(msgText, time) function, where:
*   msgText - text of the message that will be shown
*   time - number of milliseconds of delay to show the message
* */
//
// function showMsg(msgText, time) {
//     setTimeout(() => {
//         alert(msgText);
//     }, time);
// }
// showMsg('hello girls',1000);


/* TASK - 2
* Add third argument into previous task function. It will be the number which will describe how many times you want to show the message.
* */
// function showMsg(msgText, time,count) {
//     let counter = 1;
//
//     let loop = setInterval(() => {
//         if (count === counter) {
//             clearInterval(loop);
//         }
//         console.log(msgText);
//         counter++;
//     }, (time * 1000));
// }
// showMsg('hello girls',1,3);

/* TASK - 3
* Create a countdown function.
* Arguments:
*   startPoint - start of countdown, It needs to be a String formatted 'HH:MM:SS' only
*   separator - this is the separator for showing the countdown on the page. Can be a String with only one character in it. Example: "/"
* */

// function countDown(startPoint, separator) {
//     let digits = startPoint.split(":");
//     let countTime = document.createElement('p');
//     countTime.textContent = digits.join(separator);
//     document.querySelector('script').before(countTime);
//
//
//     let interval = setInterval(() => {
//         digits[2] = parseInt(digits[2]) - 1;
//         countTime.innerText = digits.join(separator);
//         if (digits[2] <= 0) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }
//
// countDown('00:00:20', '/');


/* TASK - 4
* Check if the localStorage has any value connected to key 'userName'.
* If localStorage contains value by key 'userName', show message "Hello, userName", place actual value from storage instead of userName.
* If there is no key userName in the localStorage:
*   - ask user to enter his name.
*   - save it in the localStorage by the key userName
*   - show the message Hello, userName
* */

// if (localStorage.userName){
//     alert(`Hello, ${localStorage.userName}`);
// }
// else {
//     localStorage.setItem("userName" , prompt("Enter your username"));
//     alert(`Hello, ${localStorage.userName}`);
// }

/* TASK - 5 add the functionality for your mail client from the previous lesson
* Create imitation of loading data from the server.
* During 2 seconds after loading the page, instead of letters - show the "loading..." text, or any gif loader from the internet.
* After 2 second passed - show all the email letters.
* */

/* TASK - 6 add the functionality for your mail client from the previous lesson
* Place the mailStorage in the localStorage.
* When user creates an email - user localStorage API to have the access to all the letter, add new one to mailStorage and replace the current value of mailStorage in the localStorage.
* Same thing with deleting letters.
* */

// JSON.parse();
// JSON.stringify();


















