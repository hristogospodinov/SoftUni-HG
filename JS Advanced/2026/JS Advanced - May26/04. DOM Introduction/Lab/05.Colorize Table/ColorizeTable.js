function colorize() {
    const elements = document.querySelectorAll('tr');

    for (let i = 0; i < elements.length; i++) {
        if (i % 2 == 1) {
            elements[i].style.backgroundColor = 'Teal';
        }
    }
}