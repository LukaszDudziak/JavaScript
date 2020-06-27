// http://websamuraj.pl/examples/js/projekt11/

const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const timeDiv = document.querySelector('.time div');

let time = 0;
let active = 0;
let idI;


const watchTime = () => {
    if (!active) {
        active = !active;
        btnStart.textContent = 'Pauza';
        idI = setInterval(start, 10);
    } else {
        active = !active;
        btnStart.textContent = 'Start';
        clearInterval(idI)
    }
}

const start = () => {
    time++
    timeDiv.textContent = (time / 100).toFixed(2); //nie rozpada się przy dziesiątkach milisekund
}

const reset = () => {
    clearInterval(idI)
    time = 0;
    active = 0;
    btnStart.textContent = 'Start';
    timeDiv.textContent = '---'
}

btnStart.addEventListener('click', watchTime);
btnReset.addEventListener('click', reset);