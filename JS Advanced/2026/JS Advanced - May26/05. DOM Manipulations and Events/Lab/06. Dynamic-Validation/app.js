function validate() {
    let mail = document.getElementById('email')
    mail.addEventListener('change', validFunc)
    let regX= /^[a-z]+@[a-z]+\.[a-z]+$/;

    function validFunc() {
        if (!regX.test(this.value)) { 
            this.classList.add('error'); 
        } else {
            this.classList.remove('error'); 
        }
    }
    
}