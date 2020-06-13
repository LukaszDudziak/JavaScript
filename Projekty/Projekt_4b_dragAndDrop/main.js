const div = document.querySelector('div');
let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false; //flaga czy ma rysować, na początku false bo rysować ma tylko po przyciśnieciu diva

//zmienne odwołujące się do miejsca w divie, które zostało kliknięte
let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    //zmiana koloru i możliwości przesuwania po przyciśnięciu
    div.style.backgroundColor = 'gray';
    drawActive = !drawActive;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})
div.addEventListener('mousemove', (e) => {
    //warunek, jeśli wciśnięty przycisk, to możliwe jest aktualizowanie x i y 
    if (drawActive) {
        //po to, żeby element był rysowany od miejsca w którym klikam, muszę odjąć pozycję kliknięcia wewnątrz diva, od pozycji kliknięcia globalnie. Inaczej za top i left byłoby brane globalne miejsce kliknięcia, dlatego trzeba utworzyć zmienne insert, które "regulują" generowanie top i left względem tego miejsca w divie.
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;
        //ustawianie lewej/top dla diva
        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
})
div.addEventListener('mouseup', () => {
    //powrót starego koloru i zablokowanie przesuwania po spuszczeniu myszy
    div.style.backgroundColor = 'black';
    drawActive = !drawActive;

})