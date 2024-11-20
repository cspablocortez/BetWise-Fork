// possibly remove any references to the DOM and just have the class handle the balance
// this is so that the Account class can be reused in other files

class Account {
  constructor() {
    this.balance = (2500.0).toFixed(2);
    // balance.textContent = this.balance;
  }

  updateBalance(amount, type) {
    // let amount = parseFloat(amountInput.value);
    // let type = amountType.value;
    // let item = document.createElement("li");
    // let prefix = "";

    if (type == "loss") {
      this.balance -= amount;
      // item.style.color = "red";
      // prefix = "-$"
    } else {
      this.balance += amount;
      // item.style.color = "green";
      // prefix = "+$"
    }

    // item.textContent = prefix + amount.toFixed(2);
    // expensesList.appendChild(item);
    // balance.textContent = this.balance.toFixed(2);
    // amountInput.value = "";
  }

  getBalance() {
    return this.balance;
  }
}

const account = new Account();

// manipulate the DOM (HTML file) here, outside of the account class
