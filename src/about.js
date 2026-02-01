import zoumiLogo from './assets/zoumiLogo.svg';
import { el } from './domUtils.js';

export function loadAbout() {
	const content = document.querySelector('#content');
	content.classList.add('about-page');

	const logoName = el(
		'div',
		{ className: 'logo-name' },
		el('h2', {
			textContent: 'Zoumi',
			className: 'restaurant-name',
		}),
		el('img', {
			src: zoumiLogo,
			alt: 'Zoumi Bistro logo',
			className: 'logo-small',
		})
	);

	const pageHeader = el(
		'div',
		{ className: 'page-header' },
		el('h1', { className: 'page-title', textContent: 'Our story' })
	);

	pageHeader.appendChild(logoName);
	content.appendChild(pageHeader);

	const storyContainer = el(
		'div',
		{ className: 'about-txt-container' },
		el('p', {
			textContent: `In the heart of Athens, "Zoumi" (Ζουμί) stands for more than just juice. 
	It is a tribute to the intensity of Greek nature. We set out to prove that vegetarian 
	cuisine doesn't just nourish—it overflows with flavor.`,
		}),
		el('blockquote', {
			textContent: `“If it's not juicy, it's not Zoumi.”`,
		}),
		el('p', {
			textContent: `From the volcanic soil of Santorini to the wild herbs of 
    Mt. Parnitha, we source exclusively from local Greek producers. By focusing 
    on seasonal vegetables, slow-reduction broths, and cold-pressed oils, we 
    extract the "zoumi" out of every ingredient to create dishes that are bold, 
    vibrant, and unapologetically juicy.`,
		})
	);

	content.appendChild(storyContainer);
}
