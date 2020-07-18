// PRYWATNE I PUBLICZNE WŁAŚCIWOŚCI
// Domyślnie wszystkie metody i właściwości obiektów są publiczne w JS

// PRZYKŁADY UKRYWANIA DANYCH
// _konwencja
// wykorzystanie closure - metody dostępowe do ukrytych właściwości

// 1 - KONWENCJA

class Cat {
    constructor(color) {
        this._color = color
    }
    //metoda pobierająca zawartość _color
    getColor() {
        return this._color;
    }

    setColor(value) {
        if (typeof value === "string") {
            return this._color = value;
        } else {
            console.log('wartość nieprawidłowa');
        }
    }
}

const kotek = new Cat('czarny')


// 2 - WYKORZYSTANIE DOMKNIĘĆ (CLOSURES)

// PRZYKŁAD 1

class Dog {
    constructor(name, color) {
        this.name = name;
        let _color = color;
        this.getColor = () => color;
        this.setColor = color => _color = color;

    }
}

const fafik = new Dog('fafik', "brązowy")
// PRZYKŁAD 2

class Car {
    constructor(name, counter = 100000, year = 2000) {
        this.name = name;
        let _counter = counter;
        let _year = year;
        let _changeNumber = 0;

        // this.getYear = function() {
        //  return _year;
        // }
        this.getYear = () => _year;

        this.setCounter = function (value) {
            _changeNumber++;
            return _counter = value
        }

        this.getCounter = function () {
            if (_changeNumber) alert(`uważaj licznik zmieniony ${_changeNumber}`)
            return _counter
        }

        this.showCarAge = function (year) {
            return year - _year;
        }

    }

}

const polonez = new Car("polonez caro", 25000, 2009)