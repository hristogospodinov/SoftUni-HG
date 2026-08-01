import { html } from '../../node_modules/lit-html/lit-html.js';
import { showError } from '../utils/notification.js';

export function registerView(current) {
    const template = html`
        <section id="register">
            <div class="form">
                <h2>Register</h2>
                <form @submit=${(event) => onSubmit(event, current)} class="register-form">
                    <input
                        type="text"
                        name="email"
                        id="register-email"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        placeholder="password"
                    />
                    <input
                        type="password"
                        name="re-password"
                        id="repeat-password"
                        placeholder="repeat password"
                    />
                    <button type="submit">register</button>
                    <p class="message">
                        Already registered? <a href="/login">Login</a>
                    </p>
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
    // const data = Object.fromEntries(formData.entries());

    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('re-password');

    if (!email || !password) {
        showError("All fields are required!");
        return;
    }

    if (password !== rePassword) {
        showError('Passwords don\'t match!');
        return;
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            email,
            password
        })
    });

    if (!response.ok) {
        const error = await response.json();
        showError(error.message);
        return;
    }

    const userData = await response.json();
    
    const user = {
        _id: userData._id,
        accessToken: userData.accessToken
    };

    sessionStorage.setItem('user', JSON.stringify(user));

    current.goTo('/market');
}