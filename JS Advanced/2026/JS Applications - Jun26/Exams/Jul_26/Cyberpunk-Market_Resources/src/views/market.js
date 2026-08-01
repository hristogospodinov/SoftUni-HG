import { html } from '../../node_modules/lit-html/lit-html.js';

export async function marketView(current) {
    const response = await fetch('http://localhost:3030/data/cyberpunk?sortBy=_createdOn%20desc');

    if (!response.ok) {
        alert('Something went wrong!');
        return;
    }

    const items = await response.json();

    const template = html`
        <h3 class="heading">Market</h3>

        ${items.length > 0
            ? html`
                <section id="dashboard">
                    ${items.map(itemTemplate)}
                </section>
            `
            : html`
                <h3 class="empty">No Items Yet</h3>
            `
        }
    `;

    current.render(template);
}

function itemTemplate(item) {
    return html`
        <div class="item">
            <img src=${item.imageUrl} alt=${item.item} />
            <h3 class="model">${item.item}</h3>

            <div class="item-info">
                <p class="price">Price: €${item.price}</p>
                <p class="availability">${item.availability}</p>
                <p class="type">Type: ${item.type}</p>
            </div>

            <a class="details-btn" href="/details/${item._id}">
                Uncover More
            </a>
        </div>
    `;
}