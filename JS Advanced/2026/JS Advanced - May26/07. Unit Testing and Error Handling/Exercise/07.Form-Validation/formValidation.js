function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    const companyCheckbox = document.getElementById('company');
    const companyInfo = document.getElementById('companyInfo');
    const companyNumber = document.getElementById('companyNumber');

    const validDiv = document.getElementById('valid');
    const form = document.getElementById('registerForm');

    companyCheckbox.addEventListener('change', onChange);
    form.addEventListener('submit', onSubmit);

    function onChange() {
        companyInfo.style.display = companyCheckbox.checked
            ? 'block'
            : 'none';
    }

    function onSubmit(event) {
        event.preventDefault();

        let isFormValid = true;

        const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
        const passwordRegex = /^\w{5,15}$/;
        const emailRegex = /^.*@.*\..*$/;

        // Username
        if (!usernameRegex.test(username.value)) {
            username.style.borderColor = 'red';
            isFormValid = false;
        } else {
            username.style.border = 'none';
        }

        // Password
        if (!passwordRegex.test(password.value)) {
            password.style.borderColor = 'red';
            isFormValid = false;
        } else {
            password.style.border = 'none';
        }

        // Confirm Password
        if (!passwordRegex.test(confirmPassword.value)) {
            confirmPassword.style.borderColor = 'red';
            isFormValid = false;
        } else {
            confirmPassword.style.border = 'none';
        }

        // Passwords match
        if (password.value !== confirmPassword.value) {
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
            isFormValid = false;
        }

        // Email
        if (!emailRegex.test(email.value)) {
            email.style.borderColor = 'red';
            isFormValid = false;
        } else {
            email.style.border = 'none';
        }

        // Company
        if (companyCheckbox.checked) {
            let number = Number(companyNumber.value);

            if (number < 1000 || number > 9999) {
                companyNumber.style.borderColor = 'red';
                isFormValid = false;
            } else {
                companyNumber.style.border = 'none';
            }
        }

        validDiv.style.display = isFormValid ? 'block' : 'none';
    }
}