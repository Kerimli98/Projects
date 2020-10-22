const images = document.querySelectorAll('.image-to-show');

let i = 1;
const myInterval = setInterval(() => {
    for (let j = 0; j < images.length; j++) {
        images[j].classList.add('hidden');
    }
    images[i].classList.remove('hidden');
    i++;
    if (i === 4) {
        i = 0;
    }
}, 1000);

const stopButton = document.querySelector('.btn-stop');
const resumeButton = document.querySelector('.btn-resume');
document.body.append(stopButton, resumeButton);
document.querySelector('script').before(stopButton, resumeButton);

stopButton.addEventListener('click', (stop) => {
    clearInterval(myInterval);
    clearInterval(resumedInterval);

});

let resumedInterval;
resumeButton.addEventListener('click', (resume) => {
    resumedInterval = setInterval(() => {
        for (let j = 0; j < images.length; j++) {
            images[j].classList.add('hidden');
        }
        images[i].classList.remove('hidden');
        i++;
        if (i === 4) {
            i = 0;
        }
        console.log(i);
    }, 1000)
});