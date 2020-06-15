// Zobacz gotowy projekt: https://websamuraj.pl/examples/js/projekt7/

const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: '',
    aiHand: '',
}

const hands = [...document.querySelectorAll('.select img')];

//Funkcja wyboru ręki
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '') //wyczyszczenie obramówki 
    this.style.boxShadow = '0 0 0 4px red';
}

//Wybór komputera
function aiChoice() {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

//Sprawdzenie wyniku
function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === 'papier' && ai === 'kamień') || (player === 'kamień' && ai === 'nożyczki') || (player === 'nożyczki' && ai === 'papier')) {
        return 'win';
    } else {
        return 'loss';
    }
}

//Publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player; //wpisanie "twój wybór"
    document.querySelector('[data-summary="ai-choice"]').textContent = ai; //wpisanie "wybór komuptera"
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers; //dodanie +1 do statystyki liczby gier

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins; //dodanie do statystyki wygranych 
        document.querySelector('[data-summary="who-win"]').textContent = "TY WYGRYWASZ!" //wyświetlenie kto wygrał
        document.querySelector('[data-summary="who-win"]').style.color = 'blue' //zmiana koloru napisu
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses; //dodanie do statystyki przegranych 
        document.querySelector('[data-summary="who-win"]').textContent = "ON WYGRYWA!"
        document.querySelector('[data-summary="who-win"]').style.color = 'red'
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws; //dodanie do statystyki przegranych 
        document.querySelector('[data-summary="who-win"]').textContent = "ŻODYN!"
        document.querySelector('[data-summary="who-win"]').style.color = 'yellow'
    }
}

//Resety po zakończonej rozgrywce
function endGame() {
    document.querySelector(`[data-option='${game.playerHand}']`).style.boxShadow = ''; //reset obramówki
    game.playerHand = ''; //reset ręki gracza
    game.aiHand = ''; //reset ręki ai
}

//Funkcja sterująca
function startGame() {
    if (!game.playerHand) return alert('Wybierz dłoń!') //alert o nie wybraniu niczego
    game.aiHand = aiChoice(); //wywołanie wyboru komputer
    const gameResult = checkResult(game.playerHand, game.aiHand); //wywołanie sprawdzenia wyniku
    publishResult(game.playerHand, game.aiHand, gameResult); //obsługa wyników z podaniem tego czym zagrywa gracz, komputer i jaki jest wynik funkcji sprawdzającej wynik
    endGame();
}

//Wywołania funkcji
hands.forEach(hand => hand.addEventListener('click', handSelection));
document.querySelector('.start').addEventListener('click', startGame);