document.getElementById('withdrawalBtn').addEventListener('click',function(){
    // step 2 get input field and make it Number
    const inputWithdrawalField = document.getElementById('inputWithdrawal')
    const inputWithdrawal = parseFloat(inputWithdrawalField.value);
    inputWithdrawalField.value = ''

    
    // step 5 decrease the balance from the main balance
    // step 5.1 get the balance element 
    const displayBalance = document.getElementById('displayBalance')
    const displayBalanceNum = parseFloat(displayBalance.innerText)

    if (inputWithdrawal < 1) {
        alert("You can not Withdrawal 0 or negative number");
        return;
      }

      if(inputWithdrawal > displayBalanceNum){
        alert("You can not Withdrawal more then your balance");
        return;
      }
    // step 3 get display of withdrawal value
    const displayWithdrawal = document.getElementById('displayWithdrawal')
    const displayWithdrawalNum = parseFloat(displayWithdrawal.innerText)

    // step 4 add withdrawal amount on withdrawal display
    displayWithdrawal.innerText = inputWithdrawal + displayWithdrawalNum

    // step 5.2 reduce balance and display it
    displayBalance.innerText = displayBalanceNum - inputWithdrawal

})