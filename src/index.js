import './styles.css';
import { loadPage } from './initial-page-load.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import { loadContact } from './contact.js';

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

function updateContent(loadFunction) {
    content.innerHTML = "";
    content.className = "";
    loadFunction();
}

homeBtn.addEventListener('click', () => {
    updateContent(loadPage);
});

menuBtn.addEventListener('click', () => {
    updateContent(loadMenu);
});

aboutBtn.addEventListener('click', () => {
    updateContent(loadAbout);
});

contactBtn.addEventListener('click', () => {
    updateContent(loadContact);
});

loadPage();