// // Deposite  add even button handler
// //Step-01: Add even listener to the deposite button
// document.getElementById('btn-deposite').addEventListener('click', function() {
//     // Step-2: Get deposite field
//     const depositeField = document.getElementById('deposite-field');
//     const previousDepositeField = depositeField.value;
//     const previousDepositeFieldNumber = parseFloat(previousDepositeField);
//     // Step-3: Get deposite total amount
//     const depositeAmount = document.getElementById('deposite-total');
//     const previousDepositeAmount = depositeAmount.innerText;
//     // Step-4: Get the total Balance
//     const totalBalance = document.getElementById('total-balance');
//     const previousTotalBalance = totalBalance.innerText;
//     // Step-5: Sum total deposite
//     const currentDeposite = previousDepositeFieldNumber + parseFloat(previousDepositeAmount);
//     // Step-6: Update total balance
//     const currentTotalBalance = parseFloat(previousTotalBalance) + previousDepositeFieldNumber;
//     totalBalance.innerText = currentTotalBalance;
//     // Step-7: Add value in depostie amount by innerText 
//     depositeAmount.innerText = currentDeposite;
//     //Step-8: Clear deposite field
//     depositeField.value = "";
// })

// //Withdraw add even button handler
// // Step-1: Add even listener to the withdrew button
// document.getElementById('btn-withdraw').addEventListener('click', function() {
//     // Step-2: Get Withdraw field
//     const withdrawField = document.getElementById('withdraw-field');
//     const previousWithdrawField = withdrawField.value;
//     const previousWithdrawFieldNumber = parseFloat(previousWithdrawField)
//     // Step-3: Get withdraw total amount
//     const withdrawAmount = document.getElementById('withdraw-total');
//     const previousWithdrawAmount = withdrawAmount.innerText;
//     // Step-4: Get the total balance
//     const totalBalance = document.getElementById('total-balance');
//     const previousTotalBalance = totalBalance.innerText;
//     // Step-5: Sum total withdraw
//     const currentWithdraw = previousWithdrawFieldNumber + parseFloat(previousWithdrawAmount);
//     // Step-6: Update Total Balance
//     const currentTotalBalance = parseFloat(previousTotalBalance) - previousWithdrawFieldNumber;
//     totalBalance.innerText = currentTotalBalance; 
//     // Step-7: Add value in withdraw amount by innerText
//     withdrawAmount.innerText = currentWithdraw;
//     // Step-8: Clear withdraw field
//     withdrawField.value = "";
// })










// Short hand way
// deposite add even button handler
document.getElementById('btn-deposite').addEventListener('click', function(){
    const depositeNumber = getInputNumber('deposite-field');
    getTotalNumber('deposite-total', depositeNumber);
    getTotalNumber('total-balance', depositeNumber);
})

// Withdraw add even button handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdraw-field');
    getTotalNumber('withdraw-total', withdrawNumber);
    getTotalNumber('total-balance', -1*withdrawNumber);

})


// Get value from the deposite and withdraw inpute field
function getInputNumber(id){
    const number = document.getElementById(id);
    const numberValue= number.value;
    const floatNumber = parseFloat(numberValue);
    number.value = "";
    return floatNumber;
}

// Get total deposite and withdraw amount
function getTotalNumber(id, depositeNumber){
    const amount = document.getElementById(id);
    const amountNumber = amount.innerText;
    const floatAmount = parseFloat(amountNumber);
    const totalAmount = floatAmount + depositeNumber;
    amount.innerText = totalAmount;
    // return floatAmount;

}