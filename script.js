const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.querySelector("button");
const errorMSG = document.querySelector(".errorMSG");


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    errorMSG.textContent = "";
    passwordValue = password.value;
    confirmPasswordValue = confirmPassword.value;
    console.log(passwordValue, confirmPasswordValue);

    if (password.value != confirmPassword.value) {
        errorMSG.textContent = "Passwords do not match"
        errorMSG.style.visibility = "visible";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    } 
    
    else if (password.value.length < 5) {
        errorMSG.textContent = "The password length must be 5 or more characters.";
        errorMSG.style.visibility = "visible";
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
    }

    else {
        errorMSG.style.visibility = "hidden";
        password.style.borderColor= "#E5E7EB";
        confirmPassword.style.borderColor = "#E5E7EB";
    }
})