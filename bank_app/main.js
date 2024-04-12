class BankAccount {
	constructor(accountNumber, owenerName, balance) {
		this.accountNumber = accountNumber;
		this.owenerName = owenerName;
		this.balance = balance;
	}

	deposit(amount) {
		this.balance = this.balance + amount;
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log("Insufficient funds");
		} else {
			this.balance = this.balance - amount;
		}
	}

	getBalance() {
		return this.balance;
	}

	displayAccountInfo() {
		console.log(`Account Number: ${this.accountNumber}`);
		console.log(`Owner Name: ${this.owenerName}`);
		console.log(`Balance:$${this.balance}`);
	}
}

//1st Instance
const amritoBiswas = new BankAccount(120424, "Amrito Biswas", 50000);

amritoBiswas.deposit(200);
console.log(amritoBiswas.getBalance());
amritoBiswas.withdraw(50000);
console.log(amritoBiswas.getBalance());
amritoBiswas.displayAccountInfo();

//2nd Instance
const huzaifa = new BankAccount(120425, "Huzaifa Islam", 400000);

huzaifa.deposit(45000);
console.log(huzaifa.getBalance());
huzaifa.withdraw(2000);
console.log(huzaifa.getBalance());
huzaifa.displayAccountInfo();
