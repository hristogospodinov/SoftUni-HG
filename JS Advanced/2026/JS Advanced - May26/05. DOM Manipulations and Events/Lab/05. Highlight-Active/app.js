function focused() {
    let inputs = document.querySelectorAll('input');

    for (let el of inputs) {
        el.addEventListener('focus', highlight);
        el.addEventListener('blur', clear);
    }

    function highlight() {
        this.parentElement.classList.add('focused');
    }

    function clear() {
        this.parentElement.classList.remove('focused');
    }
    
}