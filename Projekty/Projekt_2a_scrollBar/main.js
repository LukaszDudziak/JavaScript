document.body.style.height = '10000px'
const div = document.createElement('div');
document.body.appendChild(div);

let size = 0;
let slide = false; //flaga zmiany

div.style.width = '100%';
div.style.height = `${size}px`;
div.style.position = 'fixed';
div.style.left = 0;
div.style.top = 0;
div.style.backgroundColor = 'green';

const changeHeight = function () {
    if (size > window.innerHeight / 2) {
        slide = !slide;
        div.style.backgroundColor = 'red';
    } else if (size <= 0) {
        slide = !slide;
        div.style.backgroundColor = 'green';
    }

    if (slide) {
        size += 5;
    } else {
        size -= 5;
    }
    div.style.height = `${size}px`; //przeniesione tutaj żeby nie dublować kodu


}

window.addEventListener('scroll', changeHeight);