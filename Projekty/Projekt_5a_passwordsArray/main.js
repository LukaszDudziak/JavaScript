// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któegoś z hasel w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)


//Pierwszy sposób (który sam wykorzystałem)

// const input = document.querySelector("input");
// const div = document.querySelector('div');
// const passwords = ['jedEN', 'DwA'];
// const messages = ["super", "działa!"]

// const showMessage = (e) => {
//     const text = e.target.value;
//     div.textContent = '';
//     passwords.forEach((password, index) => {
//         if (password.toLowerCase() === text.toLowerCase()) {
//             div.textContent = messages[index];
//         }
//     })

// }
// input.addEventListener("input", showMessage)


//Drugi sposób - ze zmianą wartości tablicy passwords

// const input = document.querySelector("input");
// const div = document.querySelector('div');
// const passwords = ['jedEN', 'DwA'];
// const messages = ["super", "działa!"]

// passwords.forEach((item, index) => {
//     passwords[index] = item.toLowerCase();
// })

// const showMessage = (e) => {
//     const text = e.target.value.toLowerCase();
//     div.textContent = '';
//     passwords.forEach((password, index) => {
//         if (password === text) {
//             div.textContent = messages[index];
//         }
//     })

// }

// input.addEventListener("input", showMessage)



//Trzeci sposób - MAP!!!
const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]

//nowa tablica, ze zmapowanej tablicy password
const LCPasswords = passwords.map(password => password.toLowerCase())

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();

    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            document.querySelector('div').textContent = messages[i];
        }
    }
}

input.addEventListener("input", showMessage)