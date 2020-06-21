const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const seachText = e.target.value.toLowerCase(); //sprawdzenie co zostało wpisane w input
    let tasks = [...liElements]; //zamiana nodeListy li na array
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(seachText)) //przefiltrowanie, czy dany element li zmniejszony do małych liter zawiera to co wpisane w inpucie i jeśli tak, to dopisanie w tablicy tasks
    ul.textContent = ''; //zerowanie ul-a
    tasks.forEach(task => { //iteracja po okrojonej tablicy tasks, po to żeby wyświetlać wszystkie zgodne taski
        ul.appendChild(task); //dodawanie tasków do ul
    })
}

input.addEventListener('input', searchTask);