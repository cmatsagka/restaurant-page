import restaurantLogo from './assets/restaurant.png';
import { el } from './domUtils.js';
import { updateContent } from './index.js';
import { loadMenu } from './menu.js';

export function loadPage() {
	const content = document.querySelector('#content');
	const menuBtn = document.querySelector('#menu-btn');
	content.classList.add('home-page');

	const homeContainer = el(
		'div',
		{ className: 'home-container' },
		el('h1', { textContent: 'Zoumi', className: 'restaurant-name' }),
		el('p', {
			textContent:
				'Boldly plant-based. Deeply Athenian. We extract the essence of the Greek seasons into every juicy bite.',
			className: 'home-description',
		}),
		el('img', {
			src: restaurantLogo,
			alt: 'Zoumi Bistro logo',
			className: 'home-logo',
		}),
		el('button', {
			textContent: 'View the Menu',
			className: 'cta-btn',
			onclick: () => updateContent(loadMenu, menuBtn),
		})
	);

	content.appendChild(homeContainer);

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
