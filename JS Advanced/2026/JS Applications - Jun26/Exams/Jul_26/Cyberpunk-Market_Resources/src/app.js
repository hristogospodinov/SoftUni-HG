import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import page from 'page';
import { render } from 'lit-html';

const main = document.getElementById('main-element');

page(decorateContext);

page('/', homeView);
page('/login', loginView);

page.start();

function decorateContext(current, next) {
    current.render = (template) => render(template, main);

    next();
}