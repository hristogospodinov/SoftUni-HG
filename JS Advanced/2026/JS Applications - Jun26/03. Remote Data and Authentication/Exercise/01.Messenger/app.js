function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';
    
    const authorInput = document.querySelector("[name='author']");
    const contentInput = document.querySelector("[name='content']");
    const messages = document.getElementById('messages');

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    async function onSend() {
        const author = authorInput.value;
        const content = contentInput.value;

        if (!author || !content) {
            return;
        }

        const message = {
            author,
            content
        };

        await fetch(baseUrl, {
            method: 'post',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(message)
        });

        authorInput.value = "";
        contentInput.value = "";
    }

    async function onRefresh(params) {
        const response = await fetch(baseUrl);
        if(!response.ok) {
            const err = await response.json();
            throw err;
        }
        const data = await response.json();

        const result = Object.values(data)
            .map(message => `${message.author}: ${message.content}`)
            .join('\n');
        
        messages.value = result;
    }

}

attachEvents();