const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abdefghijklmnopqrstuvwxyz';

const btn = document.querySelector('button');
const section = document.querySelector('section');

const codesNumber = 5000;
const charsNumber = 13;

const codesGenerator = () => {
    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
            // console.log(index);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', codesGenerator);