function validate() {
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");
    let companyCheckbox = document.getElementById("company");
    companyCheckbox.addEventListener('change', onChange);
    let companyFieldset = document.getElementById("companyInfo");
    let companyNumber = document.getElementById("companyNumber");
    let isValid = document.getElementById("valid");
    let form = document.getElementById("registerForm");
    form.addEventListener('submit', onSubmit);

    function onChange(event) {
        companyFieldset.style.display = event.currentTarget.checked ? "block" : "none";
    }

    function onSubmit(event) {
        event.preventDefault();
        let usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        if(!usernameRegex.test(username)) {
            username.style.borderColor = 'red';
        } else {
            username.style.borderColor = 'none';
        }
    }
}
