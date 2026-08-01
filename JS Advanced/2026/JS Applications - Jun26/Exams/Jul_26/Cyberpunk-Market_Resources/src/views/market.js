import { html } from '../../node_modules/lit-html/lit-html.js';

export function marketView(current) {
    const template = html`
        <h3 class="heading">Market</h3>
        <section id="dashboard">
            <h2>TEST MARKET</h2>
        </section>
    `;

    current.render(template);
}