let password = document.querySelector("#password"),
    passwordConfirmation = document.querySelector("#confirm-password"),
    createBtn = document.querySelector(".sign-up");

passwordConfirmation.addEventListener("input", checkPassword);
password.addEventListener("focusout", checkPassword);
createBtn.addEventListener("click", checkPassword);

function checkPassword() {
    if (password.value !== passwordConfirmation.value) {
        passwordConfirmation.style.outline = "1px solid red";
        createBtn.removeAttribute("form");
    } else {
        passwordConfirmation.style.outline = "";
        createBtn.setAttribute("form", "form");
    }
}
