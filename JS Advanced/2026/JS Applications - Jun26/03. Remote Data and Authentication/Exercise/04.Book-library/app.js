function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/books';

    const loadBtn = document.getElementById('loadBooks');
    const tbody = document.querySelector('tbody');

    const form = document.querySelector('form');
    const formTitle = form.querySelector('h3');
    const submitBtn = form.querySelector('button');

    const titleInput = form.querySelector('[name="title"]');
    const authorInput = form.querySelector('[name="author"]');

    let editId = null;

    loadBtn.addEventListener('click', loadBooks);
    form.addEventListener('submit', onSubmit);

    async function loadBooks() {
        tbody.innerHTML = '';

        const response = await fetch(baseUrl);
        const data = await response.json();

        for (const [id, book] of Object.entries(data)) {
            const tr = document.createElement('tr');

            const titleTd = document.createElement('td');
            titleTd.textContent = book.title;

            const authorTd = document.createElement('td');
            authorTd.textContent = book.author;

            const actionsTd = document.createElement('td');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.addEventListener('click', () => editBook(id, book));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteBook(id));

            actionsTd.appendChild(editBtn);
            actionsTd.appendChild(deleteBtn);

            tr.appendChild(titleTd);
            tr.appendChild(authorTd);
            tr.appendChild(actionsTd);

            tbody.appendChild(tr);
        }
    }

    async function onSubmit(e) {
        e.preventDefault();

        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (!title || !author) {
            return;
        }

        const book = {
            title,
            author
        };

        if (editId) {
            await fetch(`${baseUrl}/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });

            formTitle.textContent = 'FORM';
            submitBtn.textContent = 'Submit';
            editId = null;
        } else {
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
        }

        form.reset();
        await loadBooks();
    }

    function editBook(id, book) {
        editId = id;

        titleInput.value = book.title;
        authorInput.value = book.author;

        formTitle.textContent = 'Edit FORM';
        submitBtn.textContent = 'Save';
    }

    async function deleteBook(id) {
        await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        });

        await loadBooks();
    }
}

solve();