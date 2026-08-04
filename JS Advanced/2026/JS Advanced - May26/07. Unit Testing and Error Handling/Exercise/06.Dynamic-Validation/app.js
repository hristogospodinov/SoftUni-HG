function validate() {
    let email = document.getElementById('email');
    email.addEventListener('change', onChange);

    function onChange(event) {
        let input = event.currentTarget.value;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (!regex.test(input)) {
            email.classList.add("error");
        } else {
            email.classList.remove('error');
        }
    }
}