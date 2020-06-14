let size = 10;
let orderElement = 1;

const init = () => {
    // tutaj kod
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    const list = document.createElement('ul');
    btn.textContent = 'Dodaj 10 elementów listy';
    btnReset.textContent = 'Wyczyść';
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    document.body.appendChild(list);
    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', clearList);

}

const createLiElements = () => {
    // tutaj kod
    const listQuery = document.querySelector('ul');
    listQuery.style.listStyleType = 'none';

    for (let i = 0; i < 10; i++) {
        const liElement = document.createElement('li');
        liElement.innerText = `Element nr ${orderElement++}`;
        listQuery.appendChild(liElement);
        liElement.style.fontSize = `${size++}px`
    }
}

const clearList = () => {
    const listQuery = document.querySelector('ul');
    listQuery.innerText = '';
    size = 10;
    orderElement = 1;
}

init()