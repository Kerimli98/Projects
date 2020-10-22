/* TASK 1
* Create a function, that will turn any element in flex-container.
* Arguments:
*   selector - takes a text of CSS selector for finding the target element.
* */
//
// function turnToFlex(selector) {
// $(selector).css('display','flex');
// }


/* TASK 2
* Write jQuery function for turning any element into a flex-container
* */
// $.fn.turnToFlex=function (selector) {
// this.css('display','flex');
// };
//
// $('.gogi').turnToFlex();

/* TASK 3
* Rewrite previous task for taking two arguments:
*   value for align-items property
*   value for justify-content property
* Element needs to by taken from page by jQuery selector.
* */

// $.fn.turnToFlex=function (align,justify) {
// this.css({
//     display: 'flex',
//     alignItems: `${align}`,
//     justifyContent: `${justify}`
// })
// };


/* TASK 4
* Rewrite previous task.
* Now function takes only one argument
* and it is an object with all additional flex-properties and values for them.
* All the properties, that has an object needs to be added into an target element.
* */
// $.fn.turnToFlex=function (obj) {
// this.css('display','flex');
// this.css(obj);
// };


/* TASK 5
* Create container with 8 images, you can use any template images that you like.
* Plug in slider [Slick](https://kenwheeler.github.io/slick/), into your document.
* Set some configurations:
*    - show 'prev' and 'next' buttons
*    - every slide shows 2 images
*    - if images has different width - they shows with different width
*    - auto
*    - auto-switching slides every 2 seconds
*    - 'Add slide' button
* */


































































































