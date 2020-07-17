'use strict'
// Problem utraty wiązania this przez funkcje wywołaną w innej funkcji. Przykłady rozwiązania

const szarik1 = {

    children: ['fafik', 'żaba'],

    showChildren: function () {
        this.children.forEach(function (child, index) {
            // na tym etapie wywowłanie tej funkcji anonimowej spowoduje, że nie będzie ona przejmowała this z funkcji wywołanej wszędzie lecz stworzy własne wiązanie domyślne z obiektem globalnym. W przypdku użycia 'use strict' będzie to wiązanie z undefined.
            // console.log(this.children[index]); // odkomentowanie tej linijki powoduje błąd, bo window (czy undefined) nie ma własciwości children, która jest tablicą.
            console.log(this); //window - wiązanie domyślne się pojawia
        })
    },
}

szarik1.showChildren()

/* ROZWIĄZANIE */

// 1. that = this

const szarik2 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        const that = this;
        // Zawartość this (a więc obiekt) przypisujemy do innej zmiennej (często nazywamy ją that, self). Teraz możemy odwołać się do tej zmiennej (zawierajacej "prawidłowe" wiązanie) w funkcji wewnątrz.
        this.children.forEach(function (child, index) {
            console.log(that.children[index]);
            //zwórc uwagę, że w consoli napisaliśmy that.
        })
    },
}

szarik2.showChildren()



// 2. Bez funkcji (więc bez dodatkowego wywołania funkcji) - za pomocą pętli for of

const szarik3 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        // Po prostu iterujemy po tablicy. Nie ma wywołania, nie powstaje więc nowe wiązanie this (pracujemy w tym samym kontekście, pętla nie tworzy nowego). 
        for (const child of this.children) {
            console.log(child);
        }
    },
}

szarik3.showChildren()


// 3. arrow function - nie tworzy własnego wiązania this

const szarik4 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        this.children.forEach((child, index) => {
            console.log(this.children[index]);
            // function(){} stworzy nowy this. ()=>{} nie tworzy nowego this, a dziedziczy je z aktualnego.
        })
    },
}

szarik4.showChildren()


// 4. bind - trwałe wiązanie funckcji ze wskazanym this

const szarik5 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        this.children.forEach(function (child, index) {
            console.log(this.children[index]);
        }.bind(this))
        // metoda bind wywołana na funkcji zwraca inną funkcją, która jest taka sama, ale zawiera już wiązanie, ze wskazanym obiektem (to może być różny obiekt) W przykłądzie robimy wiązanie z this, które na tym etapie jest jeszcze obiektem na którym wywołujemy funkcję (dopiero wewnatrz funkcji callback straciłoby to wiązanie) 
    },
}

szarik5.showChildren()


// DODATKOWO PONAD FILM
// 5 - wykorzystanie metody forEach do przekazania this
// Metoda forEach oprócz callback, może przyjąć też this jako drugi argument (wtedy mimo utraty wiązania domyślnego mamy trwałe przypisanie this do callback, co też rozwiązuje nam problem).

const szarik6 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        this.children.forEach(function (child, index) {
            console.log(this.children[index]);
        }, this) //w tym miejscu pojawił się drugi argument (pierwszym jest callback)
    },
}

szarik6.showChildren()

// Działa też ta metoda z arrow function
const szarik7 = {
    children: ['fafik', 'żaba'],
    showChildren: function () {
        this.children.forEach((child, index) => {
            console.log(this.children[index]);
        }, this)
    },
}

szarik7.showChildren()