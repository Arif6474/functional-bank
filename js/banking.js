
// deposit transaction history
document.getElementById('deposit-button').addEventListener('click', function (){
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText);
  
    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText);

    const newDepositBalance = depositInputAmount + depositTotalAmount;

    depositTotal.innerText = newDepositBalance;

    //get total balance

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const newTotalBalance = totalBalanceAmount + depositInputAmount;

    totalBalance.innerText = newTotalBalance;


   //clear the field of deposit input
    depositInput.value = '';

})
// withdraw transaction history 
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // get current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    const newWithdrawBalance = withdrawTotalAmount + withdrawInputAmount;

    withdrawTotal.innerText = newWithdrawBalance;


    // update balance 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceText);

    const newTotalBalance = totalBalanceAmount - withdrawInputAmount;

    totalBalance.innerText = newTotalBalance;

 //clear the field of withdraw input
 withdrawInput.value = '';

})
 