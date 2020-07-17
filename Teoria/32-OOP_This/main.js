/* CO TO JEST THIS? */
// -- this - słowo zawierajace odwołanie do obiektu. JavaScript przypisuje (zgodnie z regułami) do 'this' wiązanie z obiektem. 
// -- O tym czym jest 'this' decyduje źródło (sposób) wywołania funkcji.
// -- przypisanie do obiektu w this jest zawsze w chwili wywołania funkcji. Domyślnie ma charakter niejawny (a więc nie musimy wskazywać czym jest this, to stanie się automatycznie)
// -- 'this' tworzy kontekst (obiekt) do którego możemy się odwołać w kodzie.



/* DLACZEGO THIS JEST POTRZEBNE */
// -- nie ma potrzeby używania precyzyjnych funkcji (osobnych dla każdego obiektu). Możliwość wielokrotnego użycia tej samej funkcji.
// -- czystość w kodzie, łatwiejsza edycja kodu

function showName() {
    console.log(this.name)
}

const karol = {
    name: 'karol',
    showName: showName
}

const tatiana = {
    name: 'tatiana',
    showName: showName
}

// const adam = {
//  name: 'adam',
//  showName: function() {
//   console.log(this.name)
//  }
// }

// karol.showName()
// tatiana.showName()
// adam.showName()


/* KIEDY WIĄZANIE THIS POWSTAJE? */
// -- wiązanie this powstaje w chwili wykonywania metody i nie jest zależne wprost od miejsca deklaracji funkcji a od sposobu jej wywołania.
// -- w chwili wykonywania funkcji powstaje kontekst wykonawczy, którego częścią jest this.

// function one() {
//  // 'use strict'
//  console.log(this);
//  this.name = "pierwsza";
//  return this.name;
// }

// const object1 = {
//  two: one,
//  four: function() {
//   console.log(this);
//  }
// }

// object1.two()

// const three = object1.two

// const five = object1.four;
// five()

// three();


/* REASUMUJĄC NA TYM ETAPIE  */
// Źródłem powstania this jest wywołanie funkcji. Wiązanie powstaje w chwili wywołania funkcji/metody. Wiązanie this powstaje niezależnie czy w funkcji wykorzystujemy this (trochę tak jak przy wykryciu zdarzenia powstaje event tego zdarzenia. Też możemy, ale nie musimy go użyć)



/* REGUŁY - DLACZEGO THIS JEST JAKIE JEST */

// 1. wiązanie domyślne this to obiekt globalny, chyba że używamy 'use strict' (tryb ścisły), które na to nie pozwoli (będzie undefined)

// const thisExample = function() {
//  // Tryb ścisły (stricte mode) - wartość domyślna this będzie undefined
//  // 'use strict';
//  console.log(this.example, this)
//  const inside = function() {
//   console.log(this.example, this)
//  }
//  inside()
// }

// thisExample()


// 2. wiązanie niejawne - co jest obiektem kontekstu, co jest źródłem wywołania.


const user = {
    age: 45,
    showName() {
        console.log(this.age);
    },
    showName2: function () {
        console.log(this.age);
    }
}

// user.showName()
// user.showName2()

const stefan = {
    age: 20,
    showName: user.showName
}

// stefan.showName()
// Jeśli istnieje obiekt konteksu na którym wywołana jest metoda, to on zostanie przypisany to this.



// 3. wiązanie jawne
// Mozemy powiedzieć funckji z czym ma powiązać this. Mówimy to przy wywołaniu funkcji. Metody call i apply

const human = {
    pesel: 20202020210,
}

const showPesel = function () {
    console.log(`Twój pesel to: ${this.pesel}`);
}

// showPesel()
// showPesel.call(human);


const showUser = function (name, age) {
    console.log(`użytkownik ${name}, w wieku ${age} ma pesel ${this.pesel}`);
}

// showUser.call(human, "Tomasz", 42)

// 4. wiązanie twarde
// bind - nowa funkcja ze stałym this

const showPeselUser = showPesel.bind(human);

// showPeselUser()

// 5. wiązanie z operatorem new

class User {
    constructor(name) {
        this.name = name
    }
}

const stasiek = new User('stasiek')


/* Arrow Function a this */

// Arrow function nie tworzy podczas wywołania własnego wiązania this, a je dziedziczy, co czasami jest plusem a czasami minusem.

// const cat = {
//  age: 45,
//  showAge() {
//   console.log(this.age, this);
//  },
//  showAge2: () => {
//   console.log(this.age, this);
//  }
// }

// cat.showAge()
// cat.showAge2()