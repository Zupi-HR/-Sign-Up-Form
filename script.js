const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitBtn = document.querySelector("button");
const errorMessage = document.querySelector(".errorMSG");


submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    errorMessage.textContent = "";
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    password.classList.remove("valid");
    confirmPassword.classList.remove("valid");
    errorMessage.classList.remove("showElement");
        
    passwordValue = password.value;
    confirmPasswordValue = confirmPassword.value;
    console.log(passwordValue, confirmPasswordValue);

    if (password.value.length < 5) {
        errorMessage.textContent = "The password length must be 5 or more characters.";
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
        errorMessage.classList.add("showElement");
    }

    else if (password.value != confirmPassword.value) {
        errorMessage.textContent = "Passwords do not match";
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
        errorMessage.classList.add("showElement");
    }


    else {
        password.classList.add("valid");
        confirmPassword.classList.add("valid");
    }
})