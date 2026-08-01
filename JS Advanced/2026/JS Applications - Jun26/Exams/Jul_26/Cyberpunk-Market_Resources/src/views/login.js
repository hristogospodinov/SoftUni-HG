import { html } from '../../node_modules/lit-html/lit-html.js';
import { showError } from '../utils/notification.js';

export function loginView(current) {
    // Create template
    const template = html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${(event) => onSubmit(event, current)} class="login-form">
              <input type="text" name="email" id="email" placeholder="email" />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />

              <button type="submit">login</button>

              <p class="message">
                Not registered? <a href="/register">Create an account</a>
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

    if (!email || !password) {
        showError("All fields are required!");

        return;
    }

    const response = await fetch('http://localhost:3030/users/login', {
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