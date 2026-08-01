import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { marketView } from './views/market.js';
import { createView } from './views/create.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';

const main = document.getElementById('main-element');

const userNav = document.querySelector('.user');
const guestNav = document.querySelector('.guest');

document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/market', marketView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

page.start();

async function onLogout() {
    const user = JSON.parse(sessionStorage.getItem('user'));

    const response = await fetch('http://localhost:3030/users/logout', {
        headers: {
            'X-Authorization': user.accessToken
        }
    });

    if (!response.ok) {
        alert('Logout failed!');
        return;
    }

    sessionStorage.removeItem('user');
    page.redirect('/');
}

function decorateContext(current, next) {
    current.render = (template) => render(template, main);
    current.goTo = page.redirect;

    updateNav();

    next();
}

function updateNav() {
    const user = sessionStorage.getItem('user');

    if (user) {
        userNav.style.display = 'block';
        guestNav.style.display = 'none';
    } else {
        userNav.style.display = 'none';
        guestNav.style.display = 'block';
    }
}