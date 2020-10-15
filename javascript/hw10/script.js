const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');
const button = document.querySelector('.btn');
const passwordIcon = document.getElementById('passwordIcon');
const passwordRepeatIcon = document.getElementById('passwordRepeatIcon');
const warningText = document.createElement('span');

function showPassword(event) {
    event.target.classList.toggle('fa-eye');
    event.target.classList.toggle('fa-eye-slash');

    if (event.target.classList.contains('fa-eye')) {
        event.target.previousElementSibling.type = 'password';
    } else if (event.target.classList.contains('fa-eye-slash')) {
        event.target.previousElementSibling.type = 'text';
    }
}

passwordIcon.addEventListener('click', showPassword);
passwordRepeatIcon.addEventListener('click', showPassword);

button.addEventListener('click', () => {
    warningText.remove();

    if (password.value === passwordRepeat.value && password.value !== '') {
        alert("You are welcome")
        warningText.remove();
    } else
        warningText.innerText = 'You need to enter the identical values';
    warningText.style.color = 'red';
    button.before(warningText);

});


























