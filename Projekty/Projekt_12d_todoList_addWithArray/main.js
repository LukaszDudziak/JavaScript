const toDoList = []; //tablica tasków

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //pobiera na żywo wartości z html, a nie raz, tak jak query selector
const input = document.querySelector('input');

const renderList = () => {
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key; // przypisanie id do elementu
        ul.appendChild(toDoElement); //dodaj taska do listy
    })
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    console.log(toDoList);
    taskNumber.textContent = listItems.length; //trzeba tu dodać, żeby mieć na bieżąco przeliczone
    //musi zostać przekopiowany forEach, bo przy usuwaniu elementów, przesuwa się index danego elementu
    renderList();
}

const addTask = (e) => {
    e.preventDefault() //nie przeładowuj
    const titleTask = input.value; //pobranie wartości inpute
    if (titleTask === '') return; //przerwij jeśli input pusty
    const task = document.createElement('li'); //tworzenie nowego elementu
    task.className = 'task'; //nadanie klasy elementowi
    task.innerHTML = titleTask + '<button>Usuń</button>' //dopisz wartość i dodaj button
    toDoList.push(task); //dodaj taska do tablicy
    ul.textContent = ''; //czyszczenie listy przy każdym dodanym tasku
    renderList();
    input.value = '';

    //utworzenie licznika zadań
    taskNumber.textContent = listItems.length;

    //usuwanie
    task.querySelector('button').addEventListener('click', removeTask)
}

form.addEventListener('submit', addTask)