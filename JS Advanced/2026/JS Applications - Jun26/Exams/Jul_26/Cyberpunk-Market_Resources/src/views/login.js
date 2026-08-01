import { html } from '../../node_modules/lit-html/lit-html.js';

export function loginView(current) {
    // Create template
    const template = html`
        <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form @submit=${onSubmit} class="login-form">
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

function onSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    // const data = Object.fromEntries(formData.entries());

    const email = formData.get('email');
    const password = formData.get('password');

    console.log(email, password);
    

    if (!email || !password) {
        alert("All fields are required!");

        return;
    }

}