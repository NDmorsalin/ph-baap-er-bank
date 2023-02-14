// display
const displayDeposit = document.querySelector(".displayDeposit");
const displayWithdrawal = document.querySelector(".displayWithdrawal");
const displayBalance = document.querySelector(".displayBalance");

// input
const inputDeposit = document.querySelector("#inputDeposit");

const inputWithdrawal = document.querySelector("#inputWithdrawal");

// action
const depositBtn = document.querySelector(".depositBtn");

const withdrawalBtn = document.querySelector(".withdrawalBtn");

// variable
let depositAmount = 0;
let withdrawalAmount = 0;
let balanceAmount = 0;

depositBtn.addEventListener("click", function (event) {
  const inputDepositValue = parseFloat(inputDeposit.value);

  if (inputDepositValue > 0) {
    depositAmount += inputDepositValue;

    balanceAmount += inputDepositValue;

    displayDeposit.innerHTML = depositAmount;

    displayBalance.innerHTML = balanceAmount;

    inputDeposit.value = "";
  } else {
    alert(`You can't deposit 0 or negative value`);
  }
});

withdrawalBtn.addEventListener("click", function (event) {
  const inputWithdrawalValue = parseFloat(inputWithdrawal.value);

  if (inputWithdrawalValue > 0) {

    
    if (inputWithdrawalValue > parseFloat(displayBalance.innerHTML)) {
        // error handling
      alert("You can not withdrawal more then your current balance");
      inputWithdrawal.value = "";
    } else {
        // calculation
      withdrawalAmount += inputWithdrawalValue;

      balanceAmount -= inputWithdrawalValue;

      displayWithdrawal.innerHTML = withdrawalAmount;

      displayBalance.innerHTML = balanceAmount;

      inputWithdrawal.value = "";
    }
  } else {
    // error handling
    alert(`You can't Withdrawal 0 or Negative value`);
  }
});
