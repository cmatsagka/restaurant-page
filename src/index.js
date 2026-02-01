import './styles.css';
import { initFooter } from './footer.js';

import { loadPage } from './initial-page-load.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';
import { loadContact } from './contact.js';

const content = document.querySelector('#content');

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');
const contactBtn = document.querySelector('#contact-btn');

function setActiveButton(activeBtn) {
	const navButtons = document.querySelectorAll('#menu-navigation button');
	navButtons.forEach((btn) => btn.classList.remove('active'));
	activeBtn.classList.add('active');
}

export function updateContent(loadFunction, clickedBtn) {
	content.innerHTML = '';
	content.className = '';
	loadFunction();
	if (clickedBtn) {
		setActiveButton(clickedBtn);
	}
}

initFooter();

homeBtn.addEventListener('click', () => {
	updateContent(loadPage, homeBtn);
});

menuBtn.addEventListener('click', () => {
	updateContent(loadMenu, menuBtn);
});

aboutBtn.addEventListener('click', () => {
	updateContent(loadAbout, aboutBtn);
});

contactBtn.addEventListener('click', () => {
	updateContent(loadContact, contactBtn);
});

updateContent(loadPage, homeBtn);
