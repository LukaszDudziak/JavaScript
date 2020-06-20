const clock = () => {
    const time = new Date();

    //pobranie danych, warunek po to, żeby zachowany był format dwucyfrowy i żeby zegar się nie rozjeżdżał
    const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();

    document.querySelector(`.clock span`).textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000)