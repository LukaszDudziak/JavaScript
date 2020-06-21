const inputTask = document.querySelector('.inputTask');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const listItems = document.getElementsByClassName('task');
const counter = document.querySelector('h1 span');
const browseTask = document.querySelector('.browseTask')

//metoda usuwająca
const remove = (e) => {
    e.target.parentNode.remove(); //usunięcie wpisu
    counter.textContent = listItems.length; //aktualizacja licznika
}

const addTask = (e) => {
    e.preventDefault();
    //dodanie elementu
    const taskName = inputTask.value; //pobranie wartości wpisanej w inputa
    if (!taskName) return; //jeśli input jest pusty, przerwij działanie programu
    const newTask = document.createElement('li'); //tworzenie nowego obiektu który zostanie dodany
    newTask.innerHTML = taskName + ' <button>Usuń</button>'; //musi być innerHTML, inaczej nie doda buttona
    newTask.className = 'task'; //nadanie klasy, dla ułatwienia dalszego operowania
    list.appendChild(newTask); //dodanie taska do listy
    inputTask.value = ''; //zerowanie inputa
    //licznik
    counter.textContent = listItems.length;
    //obsługa usuwania wpisu
    newTask.querySelector('button').addEventListener('click', remove)
}

const searchTask = (e) => {
    e.preventDefault();
    const inputText = e.target.value.toLowerCase();
    let listItemsArray = [...listItems];
    filteredArray = listItemsArray.filter((item) => item.textContent.toLowerCase().includes(inputText))
    list.textContent = ''
    filteredArray.forEach(task => {
        list.appendChild(task);
    })

}


form.addEventListener('submit', addTask);
browseTask.addEventListener('input', searchTask)