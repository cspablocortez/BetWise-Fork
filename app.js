const balance = document.getElementById("balance");
const expense = document.getElementById("expense");
const addBtn = document.getElementById("add-btn")
const expensesList = document.getElementById("expenses-list");

class Account {
    constructor() {
        this.balance = 1323.50;
        balance.textContent = this.balance;
    }

    addExpense() {
        this.balance = this.balance - parseFloat(expense.value);
        let expenseItem = document.createElement("li");
        expenseItem.textContent = "$" + parseFloat(expense.value);
        expensesList.appendChild(expenseItem);
        balance.textContent = this.balance;
    }
}

const account = new Account();
addBtn.addEventListener('click', account.addExpense.bind(account));