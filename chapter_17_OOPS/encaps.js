// class BankAccount {

//     #balance = 0;

//     deposit(Amount) {

//         if (Amount > 0) {

//             this.#balance +=Amount;
//         }

//     }

//     getBalance(Amount) {

//         return this.#balance;

//     }

//     withdraw(Amount) {
//         if (Amount > 0) {
//             this.#balance -= Amount;
//         }
//     }
// }

// account = new BankAccount();

// account.deposit(2000);
// console.log(account.getBalance());

// account.deposit(200);
// console.log(account.getBalance());

// account.withdraw(100);
// console.log(account.getBalance());



class newAccount {

    #balance = 0;

    deposit(Amount) {
        if (Amount > 0) {
            this.#balance += Amount;
        }
    }

    withdraw(Amount) {
        if (Amount > 0 && Amount <= this.#balance) {
            this.#balance -= Amount;
        } else if (Amount > this.#balance) {
            console.log("Insufficient balance");
        }
    }


    getBalance(Amount) {
        console.log(this.#balance);
         
    }
}

accont  = new newAccount();
accont.deposit(1000);
accont.getBalance();
accont.withdraw(2000);
accont.getBalance();
