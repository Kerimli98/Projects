//easy way, but it shows all text without clicking
// let tabTitles = document.querySelectorAll(".tabs-title");
// let items = document.querySelectorAll(".tabs-item");
//
// for (let i = 0; i < tabTitles.length; i++) {
//     tabTitles[i].addEventListener("click", function (event) {
//         for (let j = 0; j < tabTitles.length; j++) {
//             tabTitles[j].classList.remove("active");
//             items[j].hidden = true;
//         }
//         items[i].hidden = !items[i].hidden;
//         event.currentTarget.classList.add("active");
//     });
// }
//
const headers = document.querySelector(".tabs");
const headersLi = document.querySelectorAll(".tabs > li");
const content = document.querySelectorAll(".tabs-content > li");

let counter = 0;
headersLi.forEach(tab => {
    tab.dataset.index = counter;
    counter++;
});
counter = 0;
content.forEach(tab => {
    tab.dataset.index = counter;
    counter++;
});

content.forEach((tab) => {
    if(headersLi[0].dataset.index !== tab.dataset.index){
        tab.style.display = 'none';
    }
});

headers.addEventListener('click', (event) =>{
    headersLi.forEach(tab => {
        tab.classList.remove("active");
    });
    event.target.classList.add("active");
    content.forEach((tab) => {
        tab.style.display='list-item';
        if(event.target.dataset.index !== tab.dataset.index){
            tab.style.display = 'none';
        }
    })
});