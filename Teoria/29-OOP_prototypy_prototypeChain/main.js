/* PROTOTYP */

/* CZĘŚĆ 1 */
const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function(name) {
    //  this.children.push(name);
    // }
}

// obiekt prototype znajduje się w konstruktorze i możemy do niego przypisywać metody do których dostęp mają wszystkie instancje (egzemplarze) stworzoene w oparciu o konstruktor

Person.prototype.addChildren = function (name) {
    this.children.push(name);
}

// Do prototypu zdecydowanie częsciej przypisujemy funkcje (a więc metody) niż inne typy.
Person.prototype.gender = 'female';

const arek = new Person('arek', 20);
const monika = new Person('monika', 30);

monika.addChildren('basia')

/* CZĘŚĆ 2 */

// CZYM JEST PROTOTYP

// Prototyp to obiekt w funkcji konstruktora, współdzielony przez wszystkie egzemplarze. Kązdy egzemplarz ma dostęp do obiektu prototypu.

// CO ZAWIERA PROTOTYP?
// domyślnie właściwość constructor (funkcja konstruktora lub klasa) + to co zostanie przypisane do prototypu

function Player() {}

class User {

}


Player.prototype.age = 25;
const janek = new Player();
const marta = new User();

janek.constructor
marta.constructor

const darek = new janek.constructor()


// DODANIE ELEMENTÓW DO PROTOTYPU (KONSTRUKTOR)
function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    this.changeCitizenship = function (citizenship) {
        this.citizenship = citizenship;
        console.log(`Zmiana za pomocą metody w instancji na obywatelstwo ${this.citizenship}`)
    }
}

Citizen.prototype.changeCitizenship = function (citizenship) {
    this.citizenship = citizenship;
    console.log(`Zmiana za pomocą metody w protypie na obywatelstwo ${this.citizenship}`)
}

const zenek = new Citizen("Polska", "polskie");
const marysia = new Citizen("Francja", "niemieckie");

// zenek.changeCitizenship('rosyjskie')

// Obiekt prototype zawsze aktualny
// console.log(zenek.age);
Citizen.prototype.age = 21;
// console.log(zenek.age);

// Przysłanianie

// Rozszerzanie prototypu także wbudowanych konstruktorów
const arr = [5, 6, 7, 8];
Array.prototype.delete = function (index) {
    return this.splice(index, 1)
}


// CZĘŚĆ 3

// ŁAŃCUCH PROTOTYPÓW (PROTOTYPE CHAIN)

arr.__proto__ //protyp konstruktora
arr.__proto__.__proto__ //protyp Object
arr.__proto__.__proto__.__proto__ //null
//arr.age = 20
// proto1.age = 20
Object.prototype.age = 20;

zenek.__proto__.__proto__.__proto__

// KILKA INNYCH ISTOTNYCH ELEMENTÓW
// Instanceof 

arr instanceof Array;
arr instanceof Object;
arr instanceof Citizen;

zenek instanceof Citizen;
zenek instanceof Object;
zenek instanceof Function;


// Object.getPrototypeOf 
Object.getPrototypeOf(arr)
Object.getPrototypeOf(zenek)

// constructor czy prototyp - co łączy instancję z funkcją konstruktora (także  klasą) 

const janusz = new Citizen()
//janusz.__proto__ = Citizen.prototype