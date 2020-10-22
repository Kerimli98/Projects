const changeTheme = document.querySelector(".change-theme");
//buttona clicklememish state e baxiriq ve buttonun adini teyin edirik

if (localStorage.state === 'dark')
    changeTheme.innerText = "Light Mode";
else
    changeTheme.innerText = "Dark Mode";
changeState(localStorage.state);

changeTheme.addEventListener("click", () => {
    if (localStorage.state === 'dark')
        localStorage.state = "light";
    else
        localStorage.state = "dark";
//clickleyenden sonra adini deyishirik yene
    if (localStorage.state === 'dark')
        changeTheme.innerText = "Light Mode";
    else
        changeTheme.innerText = "Dark Mode";
    //clickleyende rengleri deyishecek olan functionu chagiririg,stateine esasen
    changeState(localStorage.state);
});

function changeState(state) {
    if (state === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.logo-black').classList.add('logo-link-dark');
    } else {
        document.body.classList.remove('dark-theme');
        document.querySelector('.logo-black').classList.remove('logo-link-dark');
    }
}