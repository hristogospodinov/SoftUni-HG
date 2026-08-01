import { html } from 'lit-html';

export function homeView() {
    // Return template
    return html`
        <section id="hero">
            <img src="./images/home.png" alt="home" />
            <p>We know who you are, we will contact you</p>
        </section>
    `;
}