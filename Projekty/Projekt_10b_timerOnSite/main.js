const countTime = (int = 0) => {
    let start = int;

    const timeAdd = () => {
        start++
        document.body.textContent = `${start} sekund`;
    }

    return timeAdd
}

const timex = countTime();

setInterval(timex, 1000)