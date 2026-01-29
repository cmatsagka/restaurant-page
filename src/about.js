import restaurantLogo from './assets/restaurant.png';

export function loadAbout() {
	const content = document.querySelector('#content');
	content.classList.add('about-page');

	const restaurantName = document.createElement('h2');
	restaurantName.textContent = 'Zoumi';
	restaurantName.classList.add('restaurant-name');
	content.appendChild(restaurantName);

	const image = document.createElement('img');
	image.src = restaurantLogo;
	image.alt = 'Zoumi Bistro logo';
	image.classList.add('logo-small');
	content.appendChild(image);

	const headline = document.createElement('h1');
	headline.textContent = 'Our story';
	headline.classList.add('page-title');
	content.appendChild(headline);

	const storyContainer = document.createElement('div');
	storyContainer.classList.add('about-txt-container');

	const p1 = document.createElement('p');
	p1.textContent = 'A modern bistro based on quality local products.';

	const p2 = document.createElement('p');
	p2.textContent = 'A modern bistro based on quality local products.';

	const quote = document.createElement('p');
	quote.textContent = 'A modern bistro based on quality local products.';

	storyContainer.appendChild(p1);
	storyContainer.appendChild(quote);
	storyContainer.appendChild(p2);

	content.appendChild(storyContainer);
}
