/* --- KLASY I DZIEDZICZENIE --- */

// Klasy nadrzędne (superclass), klasy pochodne, podrzędne (subclass-y) i dziedziczenie

// klasa dziedziczy po innej klasie?
// 1. zbudowanie prototypu klasy dziedziczącej w oparciu o klasę po której dziedziczy (można zapamietać w pewnym uproszczeniu, że powstaje łańcuch prototypów)
// 2. wywywołanie konstruktora klasy(klas) nad rzędnej (nadrzędnych)

// Słowo kluczowe extends - wskazanie klasy  po której nowa klasa powinna dziedziczyć.

// Słowo kluczowe super (metoda) - służy do rozszerzania konstruktora nowej klasy o kontruktor klasy z której dziedziczy


class Animal {
    constructor(age, name) {
        this.age = age;
        this.name = name
    }
    breathe() {
        console.log("Zwierze oddycha");
    }
}

const zwierze = new Animal(2, "Artek")

class Mammal extends Animal {
    constructor(age, name, hairs) {
        super(age, name);
        this.hairs = hairs;
        //wywołujemy konstruktor klasy nadrzędnej

    }
    drinkMilk() {
        console.log("Ssaki piją mleko");
    }

    speak() {
        console.log('umm hum ummm')
    }
}

const ssak = new Mammal(13, "Maks", 'ciemne')
ssak.breathe()
ssak.drinkMilk()

class Human extends Mammal {
    // jeśli nie damy constructora, to i tak będzie autoamtycnie wywołana metoda super. jesli damy w klasie (któa dziedziczy) constructor, to musimy w nim umieścić też metodę super.
    constructor(age, name, hairs, language) {
        super(age, name, hairs)
        this.language = language;
    }

    speak() {
        console.log('Człowiek mówi')
    }
}

const czlowiek = new Human(34, "Roman", "ciemne", "polski");