import restaurantLogo from './assets/restaurant.png';

export function loadPage() {
	const content = document.querySelector('#content');
	content.classList.add('home-page');

	const headline = document.createElement('h1');
	headline.textContent = 'Zoumi';
	headline.classList.add('restaurant-name');
	content.appendChild(headline);

	const description = document.createElement('p');
	description.textContent =
		'A modern bistro based on quality local products.';
	description.classList.add('home-description');
	content.appendChild(description);

	const image = document.createElement('img');
	image.src = restaurantLogo;
	image.alt = 'Zoumi Bistro logo';
	image.classList.add('home-logo');
	content.appendChild(image);
}
