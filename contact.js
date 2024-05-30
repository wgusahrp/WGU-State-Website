const email = document.getElementById('email');
const emailVerify = document.getElementById('email_verify');
const emailError = document.getElementById('email_error');
const emailVerifyError = document.getElementById('email_verify_error');

function verifyEmail() {
    if (email.value.toLowerCase() == emailVerify.value.toLowerCase()) {
        emailError.style.display = "none";
        emailVerifyError.style.display = "none";
    } else {
        emailError.style.display = "inline";
        emailVerifyError.style.display = "inline";
    }
}

email.addEventListener("input", verifyEmail);
emailVerify.addEventListener("input", verifyEmail);