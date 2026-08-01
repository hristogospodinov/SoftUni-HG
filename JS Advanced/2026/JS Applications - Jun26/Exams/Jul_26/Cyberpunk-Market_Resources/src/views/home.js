import { html } from '../../node_modules/lit-html/lit-html.js';

export function homeView(current) {
    // Create template
    const template = html`
        <section id="hero">
            <img src="./images/home.png" alt="home" />
            <p>We know who you are, we will contact you</p>
        </section>
    `;

    current.render(template);
}