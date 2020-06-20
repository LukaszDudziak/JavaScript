const nowTime = new Date().getTime();
const endTime = new Date('2020-08-31 12:00:00').getTime();

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');


setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;

    //zliczanie poszczególnych części odliczania 
    const days = Math.floor((endTime / (1000 * 60 * 60 * 24)) - (nowTime / (1000 * 60 * 60 * 24)));
    const hours = Math.floor((endTime / (1000 * 60 * 60) - nowTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((endTime / (1000 * 60) - nowTime / (1000 * 60)) % 60);
    let seconds = Math.floor((endTime / 1000 - nowTime / 1000) % 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds; //żeby ładnie się wyświetlało

    //wyświetlenie 
    spanD.textContent = days;
    spanH.textContent = hours;
    spanM.textContent = minutes;
    spanS.textContent = seconds;
}, 1000)