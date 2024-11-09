const balance = document.getElementById("balance");
const expense = document.getElementById("expense");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");
const dd = document.getElementById("dd");

console.log(dd.value)

class Account {
    constructor() {
        this.balance = 1323.50.toFixed(2);
        balance.textContent = this.balance;
    }

    addExpense() {
        let loss = parseFloat(expense.value);
        this.balance -= loss;
        this.balance = this.balance.toFixed(2);

        let expenseItem = document.createElement("li");
        expenseItem.style.color = "red";
        expenseItem.textContent = "-$" + loss;
        expensesList.appendChild(expenseItem);

        balance.textContent = this.balance;
        expense.value = "";
    }

    addEarned() {
        let add = parseFloat(expense.value);
        this.balance += add;
        this.balance = this.balance.toFixed(2);

        let earnedItem = document.createElement("li");
        earnedItem.style.color = "green";
        earnedItem.textContent = "+$" + add;
        expensesList.appendChild(earnedItem);

        balance.textContent = this.balance;
        expense.value = "";
    }
}

const account = new Account();

addBtn.addEventListener('click', function() {
    if(expense.value != "") {
        console.log("nothing")
        if(dd.value == "spent") {
            account.addExpense();
        } else {
            account.addEarned();
        }
    } 
    console.log("woo");
    console.log(dd.value);
});