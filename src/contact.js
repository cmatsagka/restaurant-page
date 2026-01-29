import restaurantLogo from './assets/restaurant.png';

export function loadContact() {
	const content = document.querySelector('#content');
	content.classList.add('contact-page');

	const logoName = document.createElement('div');
	logoName.classList.add('logo-name');
	content.appendChild(logoName);

	const restaurantName = document.createElement('h2');
	restaurantName.textContent = 'Zoumi';
	restaurantName.classList.add('restaurant-name');
	logoName.appendChild(restaurantName);

	const image = document.createElement('img');
	image.src = restaurantLogo;
	image.alt = 'Zoumi Bistro logo';
	image.classList.add('logo-small');
	logoName.appendChild(image);

	const headline = document.createElement('h1');
	headline.textContent = 'Contact Us';
	headline.classList.add('page-title');
	content.appendChild(headline);

	const infoContainer = document.createElement('div');
	infoContainer.classList.add('contact-container');

	function createContactSection(title, lines) {
		const section = document.createElement('div');
		section.classList.add('contact-section');

		const h3 = document.createElement('h3');
		h3.textContent = title;
		section.appendChild(h3);

		lines.forEach((text) => {
			const p = document.createElement('p');
			p.textContent = text;
			section.appendChild(p);
		});

		return section;
	}

	content.appendChild(infoContainer);
}
