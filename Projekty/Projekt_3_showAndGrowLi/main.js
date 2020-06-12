// tutaj rozwiązanie

const btn = document.querySelector('button');
const lis = document.querySelectorAll('li');
let fontSize = 10;
let visible = false;


//Z użyciem pętli for:

// const showAndGrow = function () {
//     for (i = 0; i < lis.length; i++) {
//         if (!visible) {
//             lis[i].style.display = 'block';
//         }
//         console.log('działa');
//         lis[i].style.fontSize = `${fontSize}px`;
//     }
//     fontSize++; //musi być tutaj, bo jak będzie wyżej, to każda iteracja wywoła tę zmianę wielkości
// }


// Z użyciem forEach:

btn.addEventListener('click', () => {
    lis.forEach(function (li) {
        if (!visible) {
            li.style.display = 'block';
        }
        li.style.fontSize = `${fontSize}px`;
    })
    fontSize++;
})