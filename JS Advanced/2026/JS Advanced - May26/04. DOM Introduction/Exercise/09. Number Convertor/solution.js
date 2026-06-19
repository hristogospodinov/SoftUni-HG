function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';

    selectMenuTo.appendChild(binaryOption);
    selectMenuTo.appendChild(hexadecimalOption);

    document.querySelector('button').addEventListener('click', convert);

    function convert() {
        const number = Number(document.getElementById('input').value);
        const type = selectMenuTo.value;
        const result = document.getElementById('result');

        if (type === 'binary') {
            result.value = number.toString(2);
        } else if (type === 'hexadecimal') {
            result.value = number.toString(16).toUpperCase();
        }
    }
}