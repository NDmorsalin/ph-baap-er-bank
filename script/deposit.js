// step 1 select deposit button and add click handler
document.getElementById("depositBtn").addEventListener("click", function () {
  // step 2 get the input value of deposit input filed
  // step 2.1 get the value of string
  // step 2.2 make it Number
  const inputDepositFiled = document.getElementById("inputDeposit");
  const inputDeposit = parseFloat(inputDepositFiled.value);

  // make input filed
  inputDepositFiled.value = "";
  if (inputDeposit < 1) {
    alert("You can not deposit 0 or negative number");
    return;
  }
  // Step 3 get the deposit display filed and update it with given deposit value
  // step-3.1 get deposit display element
  const displayDeposit = document.getElementById("displayDeposit");
  //step-3.2 make it Number
  const displayDepositNum = parseFloat(displayDeposit.innerText);
  //step-3.3 display on deposit section
  displayDeposit.innerText = displayDepositNum + inputDeposit;

  // step 4 add deposit amount on main balance
  const balance = document.getElementById("displayBalance");

  const balanceNum = parseFloat(balance.innerText);
  balance.innerText = balanceNum + inputDeposit;
});
