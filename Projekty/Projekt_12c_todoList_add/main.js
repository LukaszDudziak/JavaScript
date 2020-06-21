const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //pobiera na żywo wartości z html, a nie raz, tak jak query selector
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length; //trzeba tu dodać, żeby mieć na bieżąco przeliczone

}

const addTask = (e) => {
    e.preventDefault() //nie przeładowuj
    const titleTask = input.value; //pobranie wartości inpute
    if (titleTask === '') return; //przerwij jeśli input pusty
    const task = document.createElement('li'); //tworzenie nowego elementu
    task.className = 'task'; //nadanie klasy elementowi
    task.innerHTML = titleTask + '<button>Usuń</button>' //dopisz wartość i dodaj button
    ul.appendChild(task); //dodaj taska do listy
    input.value = '';

    //utworzenie licznika zadań
    taskNumber.textContent = listItems.length;

    //usuwanie
    task.querySelector('button').addEventListener('click', removeTask)
}

form.addEventListener('submit', addTask)