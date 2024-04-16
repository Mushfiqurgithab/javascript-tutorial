/*
step-1: add event handler with the withdraw dutton
step-2: get the withdraw amount from the withdraw input field
step-2.5: also make sure to convert the input  into a number y using 'parseFloat'
step-3: Get previous withdraw total
step-4: calculation total withdraw amount 
step-4.5: set total withdraw amount
step-5: get the previous balance total
step-6: calculate new balance total
step-6.5: set the new balance total

step-7: clear the input field
*/

//step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    console.log(newWithdrawAmount);


    //step-7:
    withdrawField.value = '';
    

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    
    //step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er bank e eto taka nai');
        return;
    }

    // step-4:
    const currentWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    
})