import { html } from '../../node_modules/lit-html/lit-html.js';

export async function detailsView(current) {
    const id = current.params.id;

    // console.log(id);
    const response = await fetch(`http://localhost:3030/data/cyberpunk/${id}`);

    if (!response.ok) {
        alert('Something went wrong!');
        return;
    }

    const item = await response.json();

    const user = JSON.parse(sessionStorage.getItem('user'));

    const isOwner = user && (user._id === item._ownerId);

    const template = html`
        <section id="details">
            <div id="details-wrapper">
                <div>
                    <img id="details-img" src=${item.imageUrl} alt=${item.item} />
                    <p id="details-title">${item.item}</p>
                </div>
                <div id="info-wrapper">
                    <div id="details-description">
                        <p class="details-price">Price: €${item.price}</p>
                        <p class="details-availability">
                            ${item.availability}
                        </p>    
                        <p class="type">Type: ${item.type}</p>
                        <p id="item-description">
                            ${item.description}
                        </p>
                    </div>
                    ${isOwner ? html`
                            <div id="action-buttons">
                                <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                                <a @click=${() => onDelete(item._id, current)} href="javascript:void(0)" id="delete-btn">Delete</a>
                            </div>
                        `
                        : ''
                    }
                </div>
            </div>
        </section>
    `;

    current.render(template);
}

async function onDelete(id, current) {
    const choice = confirm('Are you sure you want to delete this item?');

    if (!choice) {
        return;
    }

    const user = JSON.parse(sessionStorage.getItem('user'));

    const response = await fetch(`http://localhost:3030/data/cyberpunk/${id}`, {
        method: 'delete',
        headers: { 'X-Authorization': user.accessToken }
    });

    if (!response.ok) {
        const error = await response.json();
        alert(error.message);
        return;
    }

    current.goTo('/market');
}