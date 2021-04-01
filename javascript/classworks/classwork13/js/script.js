/* TASK - 0
* Use jQuery to get the DOM elements, by:
*    - tag
*    - class
*    - id
*    - CSS selector
*    - attribute href with the value 'gogi.com'
* Show each of them in console by console.dir() method
* */

// const $li=$("li");
// console.dir($li);
//
// const $activeLi=$(".active");
// console.dir($activeLi);
//
// const $navBar=$("#navBar");
// console.dir($navBar);
//
// const $firstLi=$("#navBar>li:first");
// console.dir($firstLi);
//
// const $attr=$("a[href='gogi.com']");
// console.dir($attr);

/* TASK - 1
* Use jQuery for creating three elements and placing them into you page. it can be any tag with any CSS properties.
* Add event listener for events: click, mouseover, focus. One event listener per element.
* And change any properties of target elements.
* */

// const $someHeader=$("<h1 class='heading'>Some heading</h1>");
// const $someText=$("<p class='texts'>some unnecessary text</p>");
// const $container=$("<div class='some-container'></div>");
//
// $someHeader.click(function (event) {
// $(event.target).fadeOut(1000);
// });
//
// $someText.focus(function (event) {
// alert('you focused on me dude');
// });
//
// $container.mouseenter((event)=>{
//     $(event.target).css({
//         backgroundColor: "teal",
//         color: "white"
//     });
// });
//
// $container.append($someHeader,$someText);
// $("script").before($container);

/* TASK - 2
* Create an empty unordered list and button "Add list item", place it on page.
* After each click on the button ask user the name of new list item and place it inside the list.
* */
//1st way
// const $list=$("<ul class='list'></ul>");
// const $btn=$("<button class='btn'>List Name</button>");
//
// $btn.click((event)=>{
//   const $listItem=$("<li class='list-item'></li>");
//   const $listItemText= prompt( "Enter the name of the list item" );
//   $listItem.text($listItemText);
//  $list.append($listItem);
// });
// $("script").before($list,$btn);

//2nd way
// const $emptyList = $('<ul class="nav-list"></ul>');
// const $button = $('<button class="add-li">Add list item</button>');
//
// $button.click((event) => {
//     const $newLi = $(`<li class='nav-list-item'>${prompt('Enter new list item name')}</li>`);
//     $emptyList.append($newLi);
// });
//
// $('script').before($emptyList, $button);

/* TASK - 3
* Create navigation menu with any number of items.
* You have class 'active' in CSS. When user click any item in menu,
* it means that this item started to be active.
* If this item already was active - nothing changes.
*
* First item of this menu is active by default.
* */

// $navBarContainer = $("<ul class='navBar-container'></ul>");
//
// for (let i = 0; i < 5; i++) {
//     let $navListItem = $(`<li class='nav-li-item'>Item ${i}</li>`);
//     $navBarContainer.append($navListItem);
//     $navListItem.css({
//         marginRight: "50px",
//         listStyleType: "none",
//         fontSize: "20px",
//         padding: "10px",
//         backgroundColor: "rose-gold"
//     });
//     $navListItem.click(function (event) {
//         if(event.target.tagName==="LI"){
//             $("ul>li").removeClass('active');
//             $(event.target).addClass("active");
//         }
//     });
// }

// $navBarContainer.css({
//     display: "flex",
//     flexWrap: "nowrap",
//     justifyContent: "center"
//
// });
// $('script').before($navBarContainer);

/* TASK - 4
* Use jQuery to create 10 text elements with different text inside.
* Place them on page.
* Use jQuery selectors to change the color of the text for:
*    - all of them, except first one
*    - only event text elements
*    - all of them, except first three odd elements
* */
//
//
// $container = $("<div class='container'>")
// $text1 = $("<p>111</p>")
// $text2 = $("<p>222</p>");
// $text3 = $("<p>333</p>");
// $container.append($text1,$text2,$text3);
//
//
//
// $("script").before($container);


/* TASK - 5
* Create a button 'Click me'.
* By every first click on this button - change background color.
* By every second click - change background color to initial value.
* */
//not completed
// $clickBtn=$("<button>Click me!</button>");
// $clickBtn.click((event)=>{
//     $('body').css("backgroundColor","red");
//
// });
// $('body').append($clickBtn);
//
//
//

/* TASK - 6
* Create an input, place it on page.
* If user entered more then 5 symbols inside it - appear the 'Send' button next to input.
* If text length starts to be smaller then 5 again - remove 'Send' button.
* */ //not completed
// $inpt = $("<input>");
// $container = $('<div></div>');
//
// $($container).append($inpt);
//
// $sendBtn = $('<button>Send</button>');
//
// if ($inpt.value.length >= 5) {
//     $($container).append($sendBtn);
// }
// $('body').append($container);
// $('script').before($container);

/* TASK - 2
* Create 'burger' menu.
* Three horizontal lines inside one square element - it gonna be a menu button. DO NOT USE ANY ICONS, ONLY PURE HTML/CSS.
* Add list with any number of items and hide it by default.
* After every first click on menu button - lines needs to become a closing sign('X'), and hidden list needs to be shown.
* After every second click on menu button OR on anywhere outside of list - turn menu button into initial state and hide the list.
* */

const $cont=$('.container');

$cont.on('click', (evt) => {
    $cont.toggleClass("change");
});

$cont.on('click',()=>{
    const $links = $("#myLinks");
    if($links.css('display')==='block'){
        $links.css('display','none');
    }
    else{
        $links.css("display","block");
    }

});

/* TASK - 3
* Add "to top" button, that will smoothly scroll the page up to the beginning of the page.
* Button needs to be fixed placed at the bottom right corner of the page and hidden y default.
*
* Show this button only after user scrolled the first screen.
* If user returned to the to of the page - hide the button.
* */


// const $buttonUp = $("<button class='button-up'>Back to Top</button>");
//
// $buttonUp.click(function (event) {
//     $('html').animate({
//         scrollTop: 0
//     }, 400)
// });
//
// $buttonUp.hide();
//
// $(window).scroll(function (event) {
//     if ($(window).scrollTop() >= 100) {
//         $buttonUp.fadeIn();
//         $('script').before($buttonUp);
//     } else {
//         $buttonUp.fadeOut();
//     }
// });

/* TASK 4
* Create for div elements. Each div has a button inside.
* Every first click on any button changes the background color of a parent div for this button.
* Every second click on ane button - returns initial background color value.
* */

// for (let i = 0; i <= 3; i++) {
//     $("script").before(
//         $("<div class='parent'><button class='child-button'></button></div>")
//     );
// }
// $(".child-button").click(function (event) {
//     /*console.log($(event.target).parent());*/
//     $(event.target).parent().toggleClass("parent-active");
// });

// const $wrapper = $(".wrapper");
//
// for (let i = 0; i <= 3; i++) {
//     $wrapper.append(
//         $("<div class='parent'><button class='child-button'></button></div>")
//     );
// }
//
// $wrapper.click(function (event) {
//     const $target = $(event.target);
//     if ($target.hasClass('child-button')) {
//         $target.parent().toggleClass('parent-active')
//     }
// });


/* TASK 5 rewrite implementation of mail-client using jQuery
* But the mailStorage is Object with a 'folders' structure now.
* Every 'folder' has an array with emails inside.
* */













