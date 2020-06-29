import itemsTemplate from './templates/menu-item.hbs';
import menu from './menu.json';

const menuTemplate = itemsTemplate(menu);
console.log(menuTemplate);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', menuTemplate);
