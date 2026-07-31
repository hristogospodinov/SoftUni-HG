function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const phonebook = document.getElementById('phonebook');
    const loadBtn = document.getElementById('btnLoad');
    const createBtn = document.getElementById('btnCreate');

    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    loadBtn.addEventListener('click', loadContacts);
    createBtn.addEventListener('click', createContact);

    async function loadContacts() {
        phonebook.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        Object.values(data).forEach(contact => {
            const li = document.createElement('li');
            li.textContent = `${contact.person}: ${contact.phone}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', async () => {
                await fetch(`${baseUrl}/${contact._id}`, {
                    method: 'DELETE'
                });

                loadContacts();
            });

            li.appendChild(deleteBtn);
            phonebook.appendChild(li);
        });
    }

    async function createContact() {
        const person = personInput.value;
        const phone = phoneInput.value;

        if (person === '' || phone === '') {
            return;
        }

        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                person,
                phone
            })
        });

        personInput.value = '';
        phoneInput.value = '';

        loadContacts();
    }
}

attachEvents();