class BankAccount {

    #balance = 0;

    deposit(Amount) {

        if (Amount > 0) {

            this.#balance +=Amount;
        }

    }

    getBalance(Amount) {

        return this.#balance;

    }

    withdraw(Amount) {
        if (Amount > 0) {
            this.#balance -= Amount;
        }
    }
}

account = new BankAccount();

account.deposit(2000);
console.log(account.getBalance());

account.deposit(200);
console.log(account.getBalance());

account.withdraw(100);
console.log(account.getBalance());


