import { Head } from './nav.js';
import { HomePage } from './index.js';
import { MenuPage } from './menu.js';


const indexBody = document.querySelector('.index-body');
const menuBody = document.querySelector('.menu-body');
const container = document.querySelector('#container');
const containerOne = document.querySelector('#menu-container');



 document.body.appendChild(Head.navbar);
 container.appendChild(HomePage.section);
 indexBody.appendChild(container);



document.body.appendChild(MenuPage.menuContent);
menuBody.appendChild(containerOne);




