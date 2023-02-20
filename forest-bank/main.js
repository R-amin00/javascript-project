//step-1: Add click even handler with submit button
document.getElementById('btn-submit').addEventListener('click', function() {
    // step-2: Get the email address from inside of email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email').value;
    // step-3: Get the password from inside of password input field
    const passwordField = document.getElementById('user-password').value;
    // DANGER: DO NOT VERIFY email password on the client side
    // step-4: Veryfiy email and password
    if(emailField === 'user@email.com' && passwordField === "user1"){
        window.location.href = 'bank.html';
    }else{
        alert("Invaild user")
    }

})