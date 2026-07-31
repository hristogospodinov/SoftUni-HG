function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const authorInput = document.querySelector('[name="author"]');
    const contentInput = document.querySelector('[name="content"]');
    const messagesArea = document.getElementById('messages');

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', sendMessage);
    refreshBtn.addEventListener('click', refreshMessages);

    async function sendMessage() {
        const author = authorInput.value;
        const content = contentInput.value;

        if (author === '' || content === '') {
            return;
        }

        const message = {
            author,
            content
        };

        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });

        authorInput.value = '';
        contentInput.value = '';
    }

    async function refreshMessages() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        const result = Object.values(data)
            .map(message => `${message.author}: ${message.content}`)
            .join('\n');

        messagesArea.value = result;
    }
}

attachEvents();