function solve() {
    const input = document.getElementById('input').value;
    const output = document.getElementById('output');

    const sentences = input
        .split('.')
        .filter(sentence => sentence.trim() !== '');

    let result = '';

    for (let i = 0; i < sentences.length; i += 3) {
        const paragraphText = sentences
            .slice(i, i + 3)
            .join('. ') + '.';

        result += `<p>${paragraphText}</p>`;
    }

    output.innerHTML = result;
}