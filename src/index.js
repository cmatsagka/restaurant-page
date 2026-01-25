import './styles.css';
import { loadPage } from './initial-page-load.js';
import { loadMenu } from './menu.js';

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');



homeBtn.addEventListener('click', () => {
    console.log('Home clicked');
    content.innerHTML = "";
    loadPage();
});

menuBtn.addEventListener('click', () => {
    console.log('Menu clicked');
    content.innerHTML = "";
    loadMenu();
});

aboutBtn.addEventListener('click', () => {
    console.log('about clicked');
    content.innerHTML = "";
});

contactBtn.addEventListener('click', () => {
    console.log('contact clicked');
    content.innerHTML = "";
});

loadPage();