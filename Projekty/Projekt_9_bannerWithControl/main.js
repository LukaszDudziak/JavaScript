// 1. Klawisz <- (stzałka w lewo) przesuwa w lewo (cofa) slider
// 2. Klawisz -> (stzałka w lewo) przesuwa w prawo slider (do przod, czyli tak jak przy funkcji changeSlide) 
// lewa strzałka: keyCode = 37
// prawy strzałka: keyCode = 39
// 3. (strzałki) wstrzymuje setInterval, a po zmianie slajdu uruchamiają go ponownie (czas ma się liczyć ponownie)

// Projekt tutaj (przetestuj działajanie strzałek na klawiaturze)
// https://websamuraj.pl/examples/js/projekt9/


const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 3000;
let active = 0;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}

const keyChangeSlide = (e) => {
    //ustawienie odpowiedniego "active"    
    switch (e.keyCode) {
        case 37:
            clearInterval(interval); //w przypadku wciśnięcia przycisku czyści intervał i zatrzymuje przechodzenie do kolejnych slajdów 
            if (active === 0) active = slideList.length; //jeśli active będzie miało długość 0, to przestawiamy active na o 1 wyższy niż indexy tablicy
            active--; //dekrementacja wartości active
            break; //przerwanie działania switcha

        case 39:
            clearInterval(interval);
            active++; //dodawanie wartości active
            if (active === slideList.length) active = 0; //jeśli active będzie miało długość tablicy elementów, to wyzeruje się i zwróci pierwszy element
            break;
    }
    //użycie ustawionego w switchu activa
    image.src = slideList[active].img; //wyświetlanie odpowiednich wartości img i txt
    h1.textContent = slideList[active].text;
    changeDot(); // wywołanie funkcji zmieniającej kropki 
    interval = setInterval(changeSlide, time) //uruchomienie interval po raz kolejny 
}

let interval = setInterval(changeSlide, time) //musi być przypisany do zmiennej, żeby móc użyć clearInterval w metodzie
// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)