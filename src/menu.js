import restaurantLogo from './assets/restaurant.png';
import { el } from './domUtils.js';

const menuItems = [
	{
		name: 'Local Sourdough',
		price: '€2',
		description: 'Served with extra virgin oil and tomato.',
	},
	{
		name: 'Crunchy potatoes',
		price: '€5',
		description: 'Crispy potatoes with galotyri on the side.',
	},
	{
		name: 'Cheese plate',
		price: '€8',
		description: 'Local cheese mystery plate.',
	},
	{
		name: 'Twisted Choriatiki',
		price: '€7',
		description: 'Myzithra, koulouri, cherry tomato, cucumber, ruccola.',
	},
	{
		name: 'Burratamas',
		price: '€7',
		description:
			'Burrata, basil oil, garlic oil, sun-dried tomato sauce and homemade breadsticks.',
	},
	{
		name: 'Kagianato',
		price: '€8',
		description: `Scrambled eggs with tomato sauce and nivato cheese`,
	},
	{
		name: 'Gorgonzola',
		price: '€12',
		description:
			'Pasta with zucchini, onion, gorgonzola and local wine sauce.',
	},
	{
		name: 'Tsiprela',
		price: '€11',
		description: 'Pasta with tsipouro, tomato and creme sauce in clay pot.',
	},
	{
		name: 'Krithariera',
		price: '€9',
		description: 'Orzo with burned leek and sauce from spiced graviera.',
	},
	{
		name: 'Mush burger',
		price: '€12',
		description: `Vegetarian burger with fried oyster mushrooms, aged cheddar, homemade cucumber pickle, 'zoumi' homemade sauce and fried potatoes on the side.`,
	},
	{
		name: 'Galaktompoureko',
		price: '€6',
		description: `Traditionally crunchy with juicy syrup`,
	},
	{
		name: 'Banoffee',
		price: '€6',
		description: `Biscuit, salty caramel, whipped cream, banana and chocolate`,
	},
];

export function loadMenu() {
	const content = document.querySelector('#content');
	content.classList.add('menu-page');

	const logoName = el(
		'div',
		{ className: 'logo-name' },
		el('h2', {
			textContent: 'Zoumi',
			className: 'restaurant-name',
		}),
		el('img', {
			src: restaurantLogo,
			alt: 'Zoumi Bistro logo',
			className: 'logo-small',
		})
	);

	const pageHeader = el(
		'div',
		{ className: 'page-header' },
		el('h1', { className: 'page-title', textContent: 'Menu' })
	);

	pageHeader.appendChild(logoName);
	content.appendChild(pageHeader);

	const list = document.createElement('ul');
	list.classList.add('menu');

	function createMenuItem(title, price, description) {
		const listItem = el(
			'li',
			{ className: 'menu-item' },
			el(
				'div',
				{ className: 'menu-item-header' },
				el('h3', { textContent: title }),
				el('span', { textContent: price, className: 'item-price' })
			),
			el('p', { textContent: description })
		);

		return listItem;
	}

	for (let i = 0; i < menuItems.length; i++) {
		const listItem = createMenuItem(
			menuItems[i].name,
			menuItems[i].price,
			menuItems[i].description
		);

		list.appendChild(listItem);
	}

	content.appendChild(list);
}
