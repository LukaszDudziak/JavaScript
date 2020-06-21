const removeTask = (e) => {
    // e.target.remove(); //usuwanie bez buttona

    // e.target.parentNode.remove(); //parentnode - obiekt który jest rodzicem buttona

    // e.target.parentNode.style.textDecoration = 'line-through'; //przekreślanie
    // e.target.remove();

    //opcja z data-key
    const btnIndex = e.target.dataset.key;
    document.querySelector(`li[data-key='${btnIndex}']`).remove();
}

document.querySelectorAll('li button').forEach(item => item.addEventListener('click', removeTask))