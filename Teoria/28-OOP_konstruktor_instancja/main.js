/* KONSTRUKTOR I INSTANCJA */

// Konstruktor to funkcja. Konwencja nakazuje by nazwa konstruktura pisana była wielką literą.
// konstruktor tworzymy za pomocą wyrażenie (przypisanie do zmiennej) lub deklracja. oba przykłądy ponizej.

// const Car = function() { }

function Car(name) {
 // console.log(this);
 this.name = name;
}

// Instanacja (egzemplarz) - obiekt stworzony w oparciu o wzór w konstruktorze. Posiada także odwołanie do prototypu constructora.

const maluch = new Car('maluch');
const polonez = new Car('polonez');
// JAK DZIAŁA TWORZENIE NOWEGO EGZEMPLARZA (INSTANCJI)
// 1. new + funkcja konstruktora - powstaje nowy  obiekt na którym wywoływana jest funkcja konstruktora.
// 2. następuje wiązanie this z utworzonym obiektem
// 3. W nowym obiekcie powstaje własciwość __proto__ wskazująca na prototyp konstruktora
// 4. Przypisanie nowego obiektu do zmiennej

maluch.name = "zabytek"