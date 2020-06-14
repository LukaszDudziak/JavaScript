//wersja z jednym hasłem
// const input = document.getElementById('pass');
// const div = document.querySelector('.message')

// const password = 'user';
// const message = 'wiadomość';

// input.addEventListener('input', function(e){
//     // console.log(e.target.value);
//     if (password === e.target.value) {
//         div.textContent = message;
//         //czyszczenie hasła, gdy jest poprawne
//         e.target.value = '';
//     } else {
//         //po to, żeby wpisując więcej znaków, wiadomość zniknęła
//         div.textContent = '';
//     }
// })

// //edycja wyglądu sfokusowanego inputa
// input.addEventListener('focus', (e) => {
//     e.target.classList.add('active');
// })
// input.addEventListener('blur', (e) => {
//     e.target.classList.remove('active');
// })

//wersja z jednym tablicą haseł
const input = document.getElementById('pass');
const div = document.querySelector('.message')

const passwords = ['user', 'wiosna'];
const messages = ['wiadomość', 'fajna pora roku'];

input.addEventListener('input', (e) => {
    //czyszczenie wiadomości gdy hasło nie jest wpisane/jest nadpisane
    div.textContent = '';

    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })
})

//edycja wyglądu sfokusowanego inputa
input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})