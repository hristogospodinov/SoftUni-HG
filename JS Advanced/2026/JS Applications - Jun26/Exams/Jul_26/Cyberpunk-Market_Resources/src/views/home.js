import { html } from 'lit-html';

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