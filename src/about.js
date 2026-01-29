import restaurantLogo from './assets/restaurant.png';

export function loadAbout() {
	const content = document.querySelector('#content');
	content.classList.add('about-page');

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
	headline.textContent = 'Our story';
	headline.classList.add('page-title');
	content.appendChild(headline);

	const storyContainer = document.createElement('div');
	storyContainer.classList.add('about-txt-container');

	const p1 = document.createElement('p');
	p1.textContent = `In the heart of Athens, "Zoumi" (Ζουμί) stands for more than just juice. 
	It is a tribute to the intensity of Greek nature. We set out to prove that vegetarian 
	cuisine doesn't just nourish—it overflows with flavor.`;

	const p2 = document.createElement('p');
	p2.textContent = `From the volcanic soil of Santorini to the wild herbs of 
    Mt. Parnitha, we source exclusively from local Greek producers. By focusing 
    on seasonal vegetables, slow-reduction broths, and cold-pressed oils, we 
    extract the "zoumi" out of every ingredient to create dishes that are bold, 
    vibrant, and unapologetically juicy.`;

	const quote = document.createElement('blockquote');
	quote.textContent = `“If it's not juicy, it's not Zoumi.”`;

	storyContainer.appendChild(p1);
	storyContainer.appendChild(quote);
	storyContainer.appendChild(p2);

	content.appendChild(storyContainer);
}
