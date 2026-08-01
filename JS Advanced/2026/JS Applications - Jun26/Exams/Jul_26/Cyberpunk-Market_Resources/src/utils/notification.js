export function showError(message) {
    const errorBox = document.getElementById('errorBox');
    const errorMsg = document.querySelector('.msg');

    errorMsg.textContent = message;
    errorBox.style.display = 'block';

    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);

}