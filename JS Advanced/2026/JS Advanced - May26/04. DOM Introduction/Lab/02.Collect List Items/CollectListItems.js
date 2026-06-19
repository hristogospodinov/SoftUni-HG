function extractText() {
    const items = document.querySelectorAll('li');
    const resultArea = document.getElementById('result');

    const text = Array.from(items)
        .map(item => item.textContent)
        .join('\n');

    resultArea.value = text;
}