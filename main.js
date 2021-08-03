import { Head } from './nav.js';
import { HomePage } from './index.js';
import { MenuPage } from './menu.js';

const indexBody = document.querySelector('.index-body');
const menuBody = document.querySelector('.menu-body');
const container = document.querySelector('#container');
const menuContainer = document.querySelector('#menu-container');

 document.body.appendChild(Head.navbar);
container.appendChild(HomePage.homeSection);
indexBody.appendChild(container);

menuContainer.appendChild(MenuPage.menuBox);
menuBody.appendChild(menuContainer);


