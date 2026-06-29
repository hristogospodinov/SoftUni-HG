function encodeAndDecodeMessages() {
    let [encodeBox, decodeBox] = document.querySelectorAll('#main textarea');
    let [encodeButton, decodeButton] = document.querySelectorAll('#main button');

    encodeButton.addEventListener("click", encodeText);
    decodeButton.addEventListener("click", decodeText);

    function encodeText(event) { 
        decodeBox.value = shiftMessage(encodeBox.value, 1);
        encodeBox.value = '';
    }

    function decodeText(event) {
        decodeBox.value = shiftMessage(decodeBox.value, -1);
    }

    function shiftMessage(text, asciicode) {
        let resultText = '';
        for(let i = 0; i < text.length; i++) {
            resultText += String.fromCharCode(text.charCodeAt(i) + asciicode);
        }
        return resultText;
    }
}