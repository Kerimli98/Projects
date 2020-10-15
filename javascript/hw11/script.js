const body = document.querySelector('body');
body.addEventListener('keyup', (event) => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '#33333a';
    });
    if (event.key === 'Enter')
        buttons[0].style.backgroundColor = 'blue';
    else if (event.key === 's')
        buttons[1].style.backgroundColor = 'blue';
    else if (event.key === 'e')
        buttons[2].style.backgroundColor = 'blue';
    else if (event.key === 'o')
        buttons[3].style.backgroundColor = 'blue';
    else if (event.key === 'n')
        buttons[4].style.backgroundColor = 'blue';
    else if (event.key === 'l')
        buttons[5].style.backgroundColor = 'blue';
    else if (event.key === 'z')
        buttons[6].style.backgroundColor = 'blue';

});
