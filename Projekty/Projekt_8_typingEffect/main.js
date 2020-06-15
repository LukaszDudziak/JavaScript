const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam neque at quasi quae ab, fuga error aliquam aliquid eum, expedita molestias voluptates voluptate. Eaque ipsa porro sunt quidem aliquid reiciendis. Similique odio commodi ducimus minus natus quam, ipsum, earum optio laudantium enim quod sunt, inventore incidunt fugit hic facere! Voluptates.'

//parametry
let indexText = 0;
const time = 70;
//implementacja
const addLetter = () => {
    spanText.textContent += text[indexText];
    indexText++;
    if (indexText === text.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spanCursor.classList.toggle('active');
}

//wywołanie
const indexTyping = setInterval(addLetter, time); //pisanie 
setInterval(cursorAnimation, 400); //kursor