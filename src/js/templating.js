'use strict';
import menuItemListTemplate from './../templates/menu-item-list.hbs';
import menuItemTableTemplate from './../templates/menu-item-table.hbs';
import menuList from './../menu/menu.json';

const refs = {
  menuFeed: document.querySelector('#table'),
};
function createMenuListItem(item) {
  return menuItemListTemplate(item);
}
export function createListMenuMarkup() {
  const markup = menuItemListTemplate(menuList);
  refs.menuFeed.insertAdjacentHTML('beforeend', markup);
}

export function createTableMenuMarkup() {
  const markup = menuItemTableTemplate(menuList);
  refs.menuFeed.insertAdjacentHTML('beforeend', markup);
}
