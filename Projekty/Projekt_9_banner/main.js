const slideList = [{
        img: 'images/img1.jpg',
        text: 'Pierwszy tekst',
    },
    {
        img: 'images/img2.jpg',
        text: 'Drugi tekst',
    },
    {
        img: 'images/img3.jpg',
        text: 'Trzeci tekst',
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]; //zamiana z NodeListy na Array

//interfejs
const time = 5000;
let active = 0;

//implementacja

//zmiana kropki
const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active')) //wyszukiwanie indexu, w tablicy dots, kropki, która w swojej classliście zawiera klasę active
    dots[activeDot].classList.remove('active'); //usuwa klasę
    dots[active].classList.add('active'); //dodaje klasę kropce odpowiadającej aktualnemu slajdowi
}

//zmiana slajdu
const changeSlide = () => {
    active++; //roluje kolejny index obiektu
    if (active === slideList.length) { //dzięki temu kręci się bez końca
        active = 0
    };
    image.src = slideList[active].img; //nadpisywanie obrazka i niżej h1
    h1.textContent = slideList[active].text;
    changeDot();
}

setInterval(changeSlide, time);