import { html } from '../../node_modules/lit-html/lit-html.js';
import { showError } from '../utils/notification.js';

export async function editView(current) {
    const id = current.params.id;

    const response = await fetch(`http://localhost:3030/data/cyberpunk/${id}`);

    if (!response.ok) {
        showError('Something went wrong!');
        return;
    }

    const item = await response.json();

    const template = html`
        <section id="edit">
            <div class="form form-item">
                <h2>Edit Your Item</h2>
    
                <form @submit=${(event) => onSubmit(event, current, id)}
                      class="edit-form">
    
                    <input
                        type="text"
                        name="item"
                        id="item"
                        placeholder="Item"
                        .value=${item.item}
                    />    
                    <input
                        type="text"
                        name="imageUrl"
                        id="item-image"
                        placeholder="Your item Image URL"
                        .value=${item.imageUrl}
                    />    
                    <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Price in Euro"
                        .value=${item.price}
                    />    
                    <input
                        type="text"
                        name="availability"
                        id="availability"
                        placeholder="Availability Information"
                        .value=${item.availability}
                    />    
                    <input
                        type="text"
                        name="type"
                        id="type"
                        placeholder="Item Type"
                        .value=${item.type}
                    />    
                    <textarea
                        id="description"
                        name="description"
                        placeholder="More About The Item"
                        rows="10"
                        cols="50"
                        .value=${item.description}
                    ></textarea>
    
                    <button type="submit">Edit</button>
                </form>
            </div>
        </section>
    `;
    
    current.render(template);
}

async function onSubmit(event, current, id) {
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
        showError('All fields are required!');
        return;
    }

    const user = JSON.parse(sessionStorage.getItem('user'));

    const response = await fetch(`http://localhost:3030/data/cyberpunk/${id}`, {
        method: 'put',
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
        showError(error.message);
        return;
    }

    current.goTo(`/details/${id}`);
}