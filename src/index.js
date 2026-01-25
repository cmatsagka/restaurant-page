import './styles.css';
import { loadPage } from './initial-page-load.js';

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

content.innerHTML = "";

homeBtn.addEventListener('click', () => {
    console.log('Home clicked');

    loadPage();
});

menuBtn.addEventListener('click', () => {
    console.log('Menu clicked');
});

aboutBtn.addEventListener('click', () => {
    console.log('about clicked');
});

contactBtn.addEventListener('click', () => {
    console.log('contact clicked');
});

