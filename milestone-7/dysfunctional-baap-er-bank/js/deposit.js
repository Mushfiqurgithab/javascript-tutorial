/*
step 1: add event listener to the deposit button
step 2: get deposit amount from the deposit input field
step 2.5: convert string deposit amount to a number type
step 3: Clear the deposit input field after getting the value
step 4: get the previous deposit total
step 5: calculate new deposit total and set the value to the deposit total 
step 6: get current  balance total
step 7: calculate the new balance and set it to the balance total element

*/

// step-1
document.getElementById('btn-deposit').addEventListener('click',function(){
  // step-2
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  
  // step-3
  depositField.value = '';

  // step-4
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step-5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  // step-6
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  // step-7
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
})