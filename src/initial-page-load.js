import restaurantLogo from './assets/restaurant.png';
import { el } from './domUtils.js';
import { updateContent } from './index.js';
import { loadMenu } from './menu.js';

export function loadPage() {
	const content = document.querySelector('#content');
	content.classList.add('home-page');

	const headline = document.createElement('h1');
	headline.textContent = 'Zoumi';
	headline.classList.add('restaurant-name');
	content.appendChild(headline);

	const description = document.createElement('p');
	description.textContent = `Boldly plant-based. Deeply Athenian. We extract the essence of the Greek seasons into every juicy bite.`;
	description.classList.add('home-description');
	content.appendChild(description);

	const image = document.createElement('img');
	image.src = restaurantLogo;
	image.alt = 'Zoumi Bistro logo';
	image.classList.add('home-logo');
	content.appendChild(image);

	const viewMenuBtn = el('button', {
		textContent: 'View the Menu',
		className: 'cta-btn',
	});

	const menuBtn = document.querySelector('#menu-btn');

	viewMenuBtn.addEventListener('click', () => {
		updateContent(loadMenu, menuBtn);
	});

	content.appendChild(viewMenuBtn);

	const footer = el(
		'footer',
		{ className: 'site-footer' },
		el('p', { textContent: `© ${new Date().getFullYear()} Zoumi Bistro` }),
		el('a', {
			href: 'https://github.com/cmatsagka',
			textContent: 'Build by Chrysanthi M.',
		})
	);

	content.appendChild(footer);
}
