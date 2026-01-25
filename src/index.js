import './styles.css';
import { loadPage } from './initial-page-load.js';
import { loadMenu } from './menu.js';

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

function updateContent(loadFunction) {
    content.innerHTML = "";
    loadFunction();
}

homeBtn.addEventListener('click', () => {
    console.log('Home clicked');
    updateContent(loadPage);
});

menuBtn.addEventListener('click', () => {
    console.log('Menu clicked');
    updateContent(loadMenu);
});

aboutBtn.addEventListener('click', () => {
    console.log('about clicked');
    // updateContent();
});

contactBtn.addEventListener('click', () => {
    console.log('contact clicked');
    // updateContent();
});

loadPage();