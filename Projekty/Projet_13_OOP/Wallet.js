class Wallet {
    constructor(money) {
        let _money = money;
        //pobieranie aktualnej zawartości portfela
        this.getWalletValue = () => _money;

        //sprawdzenie czy użytkownik ma odpowiednią ilość środków
        this.checkCanPlay = value => {
            if (_money >= value) return true
            return false
        }

        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                } else {
                    throw new Error('Nieprawidłowy typ działania')
                }
            } else {
                console.log(typeof (value));
                throw new Error('Nieprawidłowa liczba')
            }
        }
    }

}