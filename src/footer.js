import { el } from './domUtils.js';

export function initFooter() {
	const footer = document.querySelector('footer');

	const footerContainer = el(
		'div',
		{ className: 'footer-container' },
		el('p', { textContent: `© ${new Date().getFullYear()} Zoumi Bistro` }),
		el('a', {
			href: 'https://github.com/cmatsagka',
			textContent: 'Built by Chrysanthi M.',
		})
	);

	footer.appendChild(footerContainer);
}
