// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3'];
let charIndex = -20;
let txtIndex = 0;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    // if (charIndex < txt[txtIndex].length) {
    //     spnText.textContent += txt[txtIndex][charIndex];
    //     charIndex++;
    //     setTimeout(function () {
    //         addLetter(charIndex)
    //     }, 500)
    // } else {
    //     spnText.textContent = '';
    //     txtIndex++;
    //     charIndex = 0;
    //     setTimeout(function () {
    //         addLetter(txtIndex)
    //     }, 2000)
    // }
    if (charIndex >= 0) { //opóźnienie startu (dlatego charIndex jest ujemny)
        spnText.textContent += txt[txtIndex][charIndex];
    }
    charIndex++
    if (charIndex === txt[txtIndex].length) { //kiedy skończy się słowo
        txtIndex++;
        if (txtIndex === txt.length) return; //zakończenie programu przy indeksie równym długości tablicy słów

        return setTimeout(() => { //opóźnienie po to, żeby jeszcze pomigał na koniec każdego słowa
            charIndex = -20;
            spnText.textContent = '';
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 100)
}



addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);