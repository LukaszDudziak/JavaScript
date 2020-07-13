/* PROTOTYP */

/* CZĘŚĆ 1 */

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.children = [];
    // this.addChildren = function (name) {
    //     this.children.push(name);
    // } 
    //Pisząc w obiekcie, przy utworzeniu każdej nowej jego instancji powielamy metodę, upraszczając - marnujemy pamięć, kiedy można metody wspólne wpisać w prototyp
}
//dzięki temu, metoda będzie zapisana w __proto__, zamiast każdorazowo przy nowych instancjach
Person.prototype.addChildren = function (name) {
    this.children.push(name);
}


const arek = new Person('Arek', 20);
const monika = new Person('Monika', 30);