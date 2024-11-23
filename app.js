const balanceLabel = document.getElementById("balance");
const amountInput = document.getElementById("amount");
const amountType = document.getElementById("type");
const addBtn = document.getElementById("add-btn");
const expensesList = document.getElementById("expenses-list");
const statesDropdown = document.getElementById("states");
let num = 0;

function generateDropdown() {
  fetch("./states.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((stateData) => {
        const opt = document.createElement("option");
        opt.value = stateData.state;
        opt.textContent = stateData.state;
        statesDropdown.append(opt);
      });
    });
}

generateDropdown();

class Account {
  constructor() {
    this.balance = (2500.0).toFixed(2);
    balanceLabel.textContent = this.balance;
  }

  updateBalance() {
    let amount = parseFloat(amountInput.value);
    let type = amountType.value;
    let item = document.createElement("li");
    let expObj = document.createElement("p");
    expObj.textContent = "Expenses";
    let prefix = "";
    let exp = document.getElementById("exp");

    if (num == 0) {
      num++;
    } else if (num == 1) {
      num = 2;
    }

    if (num == 1) {
      exp.appendChild(expObj);
    }

    if (type == "loss") {
      this.balance -= amount;
      item.style.color = "red";
      prefix = "-$";
    } else {
      this.balance += amount;
      item.style.color = "green";
      prefix = "+$";
    }

    item.textContent = prefix + amount.toFixed(2);
    expensesList.appendChild(item);
    balanceLabel.textContent = this.balance.toFixed(2);
    amountInput.value = "";
  }

  updateLocation(state) {
    this.balance = state.average.toFixed(2);
    balanceLabel.textContent = this.balance;
  }
}

const account = new Account();

addBtn.addEventListener("click", () => {
  account.updateBalance();
});

statesDropdown.addEventListener("change", () => {
  fetch("./states.json")
    .then((response) => response.json())
    .then((data) => {
      const selectedState = statesDropdown.value;
      const stateData = data.find((dataObj) => dataObj.state === selectedState);
      account.updateLocation(stateData);
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
