const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; //flaga oznaczenia czy ma rosnąć, czy maleć
let size = 10; //wielkość kwadratu
square.style.width = `${size}px`;
square.style.height = `${size}px`;


//max wielkość kwadratu
//window.innerWidth * 0.5 

window.addEventListener('scroll', function () {

    //operowanie flagą przy wartościach granicznych
    if (size >= window.innerWidth / 2) {
        grow = !grow;
    } else if (size == 0) {
        grow = !grow; //odwrócenie wartości
    }

    //instrukcje rośnie/maleje
    if (grow) { //flaga jest wartością boolean, więc nie przyrównuje
        size += 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    } else {
        size -= 5;
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
    }
})