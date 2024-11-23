// got rid of refecenscs to DOM to make it work anywherew

class Account {
  constructor() {
    this.balance = (2500.0).toFixed(2);
  }

  updateBalance(type) {
    // let amount = parseFloat(amountInput.value);
    // let type = amountType.value;
    // let item = document.createElement("li");
    // let expObj = document.createElement("p");
    // expObj.textContent = "Expenses";
    // let prefix = "";
    // let exp = document.getElementById("exp");

    // if (num == 0) {
    //   num++;
    // } else if (num == 1) {
    //   num = 2;
    // }

    // if (num == 1) {
    //   exp.appendChild(expObj);
    // }

    if (type == "loss") {
      this.balance -= amount;
      //   item.style.color = "red";
      //   prefix = "-$";
    } else {
      this.balance += amount;
      //   item.style.color = "green";
      //   prefix = "+$";
    }

    this.balance = this.balance.toFixed(2);

    // item.textContent = prefix + amount.toFixed(2);
    // expensesList.appendChild(item);
    // balanceLabel.textContent = this.balance.toFixed(2);
    // amountInput.value = "";
  }

  getBalance() {
    return this.balance;
  }

  updateLocation(state) {
    this.balance = state.average.toFixed(2);
  }
}
