import { homeView } from './views/home.js';
import page from 'page';
import { render } from 'lit-html';

const main = document.getElementById('main-element');

page('/', homeView);

page.start()
