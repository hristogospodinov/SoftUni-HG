function toggle() {
    let clickey = document.getElementsByClassName('button')[0];
    let textey = document.getElementById('extra');

    if (clickey.textContent === 'More') {
        textey.style.display = 'block';
        clickey.textContent = 'Less';
    } else {
        textey.style.display = 'none';
        clickey.textContent = 'More';
    }
    
}