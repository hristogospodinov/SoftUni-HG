import { html } from '../../node_modules/lit-html/lit-html.js';

export function createView(current) {
    const template = html`
        <section id="create">
            <div class="form form-item">
                <h2>Share Your item</h2>

                <form @submit=${(event) => onSubmit(event, current)} class="create-form">
                    <input type="text" name="item" id="item" placeholder="Item" />

                    <input
                        type="text"
                        name="imageUrl"
                        id="item-image"
                        placeholder="Your item Image URL"
                    />

                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price in Euro"
                    />

                    <input
                        type="text"
                        name="availability"
                        id="availability"
                        placeholder="Availability Information"
                    />

                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Item Type"
                    />

                    <textarea
                        id="description"
                        name="description"
                        placeholder="More About The Item"
                        rows="10"
                        cols="50"
                    ></textarea>

                    <button type="submit">Add</button>
                </form>
            </div>
        </section>
    `;

    current.render(template);
}

async function onSubmit(event, current) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const item = formData.get('item');
    const imageUrl = formData.get('imageUrl');
    const price = formData.get('price');
    const availability = formData.get('availability');
    const type = formData.get('type');
    const description = formData.get('description');

    if (!item || !imageUrl || !price || !availability || !type || !description) {
        alert('All fields are required!');
        return;
    }

    const user = JSON.parse(sessionStorage.getItem('user'));

    const response = await fetch('http://localhost:3030/data/cyberpunk', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        },
        body: JSON.stringify({
            item,
            imageUrl,
            price,
            availability,
            type,
            description
        })
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
    }

    current.goTo('/market');
}