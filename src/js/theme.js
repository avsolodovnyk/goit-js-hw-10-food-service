'use strict';
import obj from './templating';
import { createListMenuMarkup } from './templating';
import { createTableMenuMarkup } from './templating';
const refs = {
  themeSwitchBut: document.querySelector(`button[data-action="theme-switch"]`),
  layoutSwitchBut: document.querySelector(
    `button[data-action="list-theme-switch"]`,
  ),
  body: document.querySelector('body'),
  menuFeed: document.querySelector('#table'),
};
const currentTheme = localStorage.getItem('theme');
if (currentTheme == 'dark') {
  darkThemeSwitch();
}
const currentLayout = localStorage.getItem('layout');
if (currentLayout == 'table') {
  createTableMenuMarkup();
} else {
  createListMenuMarkup();
}
refs.themeSwitchBut.addEventListener('click', handleThemeClick);
refs.layoutSwitchBut.addEventListener('click', handleLayoutClick);

function handleLayoutClick(e) {
  const descendantList = refs.menuFeed.querySelector('#menu');
  const descendantTable = refs.menuFeed.querySelector('.js-table');
  if (refs.menuFeed.contains(descendantList)) {
    descendantList.remove();
    tableLayoutSwitch();
  } else {
    if (refs.menuFeed.contains(descendantTable)) {
      descendantTable.remove();
      listLayoutSwitch();
    }
  }
}
function handleThemeClick(e) {
  if (refs.body.classList.contains('theme-dark')) {
    lightThemeSwitch();
  } else {
    darkThemeSwitch();
  }
}

function darkThemeSwitch() {
  refs.body.classList.remove('theme-light');
  refs.body.classList.add('theme-dark');
  const button = document.querySelector('i.toolbar__icon');
  button.textContent = 'brightness_3';
  localStorage.setItem('theme', 'dark');
}
function lightThemeSwitch() {
  refs.body.classList.remove('theme-dark');
  refs.body.classList.add('theme-light');
  const button = refs.themeSwitchBut.querySelector('i.toolbar__icon');
  button.textContent = 'wb_sunny';
  localStorage.setItem('theme', 'light');
}
function listLayoutSwitch() {
  createListMenuMarkup();
  const button = document.querySelector(
    'button[data-action="list-theme-switch"]>i',
  );
  button.textContent = 'list';
  localStorage.setItem('layout', 'plate');
}
function tableLayoutSwitch() {
  createTableMenuMarkup();
  const button = document.querySelector(
    'button[data-action="list-theme-switch"]>i',
  );
  button.textContent = 'bar_chart';
  localStorage.setItem('layout', 'table');
}
