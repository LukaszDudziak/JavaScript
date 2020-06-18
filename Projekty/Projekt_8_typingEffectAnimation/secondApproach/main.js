// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];

let letterIndex = -5;
let wordIndex = 0;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    if (letterIndex >= 0) {
        spnText.textContent += txt[wordIndex][letterIndex];
    }
    letterIndex++; //może być wyżej, ale wtedy poniższy warunek będzie trzeba skrócić o -1, 
    if (txt[wordIndex].length === letterIndex) {
        wordIndex++;
        if (wordIndex === txt.length) return;
        return setTimeout(() => { //bez użycia returna trzebaby dać *** w else
            letterIndex = -10;
            spnText.textContent = '';
            addLetter();
        }, 2000)
    }

    setTimeout(addLetter, 200); //*** 

}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);