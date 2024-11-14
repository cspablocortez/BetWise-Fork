const balance = document.getElementById("balance");
const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");
const dd = document.getElementById("type");
const states = document.getElementById("states");

console.log(dd.value)

class Account {
    
    constructor() {
        this.balance = 2500.00.toFixed(2);
        balance.textContent = this.balance;
    }

    addExpense() {
        let loss = parseFloat(input.value);
        this.balance -= loss;
        console.log(this.balance)

        let expenseItem = document.createElement("li");
        expenseItem.style.color = "red";
        expenseItem.textContent = "-$" + loss.toFixed(2);
        expensesList.appendChild(expenseItem);

        balance.textContent = this.balance.toFixed(2);
        input.value = "";
    }

    addIncome() {
        let gain = parseFloat(input.value);
        this.balance += gain;
        console.log(this.balance)

        let incomeItem = document.createElement("li");
        incomeItem.style.color = "green";
        incomeItem.textContent = "+$" + gain.toFixed(2);
        expensesList.appendChild(incomeItem);

        balance.textContent = this.balance.toFixed(2);
        input.value = "";
    }

    setBalance(newBalance) {
        this.balance = newBalance.toFixed(2);
        balance.textContent = this.balance;
    }
}

const account = new Account();

states.addEventListener('change', function() {
    // const californiaIncome = statesIncome.find(state => state.state === "California");
    let activeState = statesIncome.find(stateObject => stateObject.state === states.value);
    account.setBalance(activeState.avg);
})

addBtn.addEventListener('click', function() {
    if(input.value != "") {
        console.log("nothing")
        if(dd.value == "spent") {
            account.addExpense();
        } else {
            account.addIncome();
        }
    } 
    console.log("woo");
    console.log(dd.value);
});