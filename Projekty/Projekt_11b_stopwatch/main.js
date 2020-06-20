// http://websamuraj.pl/examples/js/projekt11/


const btnTime = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = 0;
let interval;

const timer = () => {
    if (!active) {
        active = !active;
        btnTime.textContent = 'Pauza';
        interval = setInterval(start, 10);
    } else {
        active = !active;
        btnTime.textContent = 'Start';
        clearInterval(interval)
    }
}

const start = () => {
    time++;
    panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
    clearInterval(interval);
    time = 0;
    active = 0;
    btnTime.textContent = 'Start';
    panel.textContent = '---';

}
btnTime.addEventListener('click', timer);
btnReset.addEventListener('click', reset);