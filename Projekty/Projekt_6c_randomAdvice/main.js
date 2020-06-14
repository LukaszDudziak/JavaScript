const advices = [];

const addAdvice = (e) => {
    e.preventDefault(); //wstrzymanie przeładowywania strony (próby wysłania forma)
    const input = document.querySelector('input');
    newAdvice = input.value; // przypisanie wpisanej w input wartości do zmiennej
    if (advices.includes(newAdvice)) { //zapobiega powtarzaniu się wartości w tablicy
        alert('taka wartość już się pojawiła');
        return;
    }
    advices.push(newAdvice); //push zmiennej do tablicy
    input.value = ''; //zeruje input po puszowaniu
    alert(`Dodałeś: ${newAdvice}`);
    console.log(advices);
}

const cleanAdvices = (e) => {
    e.preventDefault();
    advices.splice(0); //zerowanie tablicy, można też zrobić przez .length = 0
}

const showAdvice = (e) => {
    e.preventDefault();
    const h1 = document.querySelector('h1');
    const randomAdvice = advices[Math.floor(Math.random() * advices.length)]
    h1.textContent = randomAdvice;
}

const showOptions = (e) => alert(`Dostępne możliwości: ${advices}`);


document.querySelector('.add').addEventListener('click', addAdvice);
document.querySelector('.clean').addEventListener('click', cleanAdvices);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);