//Klasyczny counter w którym zwiększana wartość ma zasięg globalny

// let number = 0;

// const add = () => {
//     number++
//     document.body.textContent = `aktualny stan licznika to ${number}`
// }

// document.addEventListener('click', add);


//DOMKNIĘCIA 

// function x() {
//  let number = 0;
//  function y() {
//   console.log(number);
//  }
//  return y
// }

// const example = x();

// example()

// Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

// Closure - zmienna istnieje w innej funkcji, mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna. 

//W pamieci programu zmienna istnieje jeśli prowadzi do niej referencja z innej funkcji. Mozemy mieć do niej dostęp, ale także je zmieniać. 


//Counter przy użyciu domknięć

const add = (start = 0) => { //wartość domyślna parametru, jeśli nie będzie podany
    let number = start; //wyizolowana zmienna, nie globalna
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika to ${number}`;
    }
}
const counter = add();
// const counterFrom5 = add(5);
document.addEventListener('click', counter);