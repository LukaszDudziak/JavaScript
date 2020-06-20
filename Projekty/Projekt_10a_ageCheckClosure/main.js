const user = (name = '', age) => {
    let userName = name;
    let userAge = age; //normalnie przestałyby istnieć

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz wejść': 'Nie możesz wejść'}`); //ale istnieje referencja do tych danych
    }

    return showName //w funkcji która jest zwracana
}

const adam = user('Adam', 18);

adam();