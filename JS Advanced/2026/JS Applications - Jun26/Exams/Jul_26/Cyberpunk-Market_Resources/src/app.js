import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homeView } from './views/home.js';
import { loginView } from './views/login.js';

const main = document.getElementById('main-element');

page(decorateContext);

page('/', homeView);
page('/login', loginView);

page.start();

function decorateContext(current, next) {
    current.render = (template) => render(template, main);

    next();
}