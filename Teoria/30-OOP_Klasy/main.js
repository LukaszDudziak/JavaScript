/* ----- Czym jest klasa W JS ----- */
// Klasa jest tym czymś czego potrzebował JS :). Naprawdę ułatwia życie programisty. Dostępna od ES6
// Klasa jest schematem (wzorem) na podstawie którego tworzymy nowe obiekty, instancje, egzemplarze klasy. 
// Klasa pozwala stosować w obiekcie dziedziczenie, hermetyzacje, polimorfizm 
// Klasa jest lukrem składniowym, pozwala napisać łatwiej, ładniej, szybciej, ale ciągle to jest to samo co już mogliśmy zrobić przed ES6, zanim pojawiły się klasy (np. za pomocą konstruktora funkcji).

/* ----- Jak tworzymy klasę ----- */
// słowo kluczowe class
// w środku klasy metody (żadna metoda nie jest obowiązkowa)
// to co umeiszczamyu w konstruktorze jest potem umeiszczane (jako kopia) w każdym egzemplarzy klasy.
//  wszystkie metody, które umieszczamy bezpśrednio w klasie (ponizej przykład addMember) są umeiszczane w prototypie klasy

class Family {
    constructor(name) {
        this.name = name;
        // this.addMember = function() {
        //  console.log("wywołane z instancji");
        // } //metoda byłaby umeiszczaona jako kopia w kazdej instancji klasy
    }
    // ta metoda umieszczana jest w prototypie klasy, który współdzielą wszystkie instancje (obiekty powstałą w oparciu o klasę)
    addMember() {
        console.log("wywołane z prototypu");
    }

}

// Tworzenie instancji na podstawie klasy odbywa się w taki sam sposób jak na podstawie funckji konstruktora 
const nowakowie = new Family("nowakowie")

// Wywołanie metoda. Najpeirwsz szuka w instancji, potem w łacuhc prototypów (zaczyna od prototypu klasy)
nowakowie.addMember()

// KLASA JEST ODPOWIEDNIKIEM KONSTRUKTORA, PONIŻEJ TO WIDAĆ DOSKONALE. UZYSKUJEMY TEN SAM EFEKT CO PRZY KLASIE
const Family2 = function (name) {
    this.name = name;
}
const kowalscy = new Family2("kowalscy");
Family2.prototype.addMember = function () {}



/* ----- Wyrażenie klasy ----- */

// Wyrażenie funkcyjne 
const Person = function () {}
// Deklaracja klasy
function Person2() {}
// Deklaracja klasy
class Person3 {}
// Wyrażenie klasy
const Person4 = class {}

// PRZYKŁAD KLASY

class Rodzina {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }
    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`Nowy członek rodziny: ${newMember}. Rodzina liczy teraz ${this.members} osób`);
    }

    //Metody statyczne deklarowane w klasie - Dodajemy prefiks static. Metody statyczne można wywołać z poziomu klasy (nie są dostępne z poziomu instancji)
    static makeFamily(...memebers) {
        return memebers;
    }

}

const stasiakowie = new Rodzina(3, 'Jan', 'Ewa', 'Adam')

stasiakowie.addMember("Jaś");

const kwiatkowscy = new Rodzina(1, "Piotr");

// Wywołanie metody statycznej (na konstruktorze, na klasie)
Rodzina.makeFamily('Maria', 'Filip')


/* ----- Warto pamietać o klasach na tym etapie ----- */

// -- nie podlegają hoistingowi
// -- mniejsze mozliwości popełnienia błędu choćby nie da się wywołać bez new
// -- czytelniejsze
// -- uproszczenie w napisaniu wielu innych rzeczy jako np. dziedziczenie (extends). 
// -- co da się napisać za pomocą klasy, mozna też napisać w ES6, ale jest to bardziej (lub zdecydowanie bardziej) zawiłe. Tu jest proste.