import restaurantLogo from './assets/restaurant.png';

const menuItems = [
	{
		name: 'Local Sourdough',
		price: '€2',
		description: 'Served with salted butter.',
	},
	{
		name: 'Crunchy potatoes',
		price: '€5',
		description: 'Crispy potatoes with galotyri on the side.',
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
			'Burrata, basil oil, garlic oil, sundried tomato sauce and homemade breadsticks.',
	},
	{
		name: 'Gorgonziola',
		price: '€12',
		description: 'Pasta with zuccini, onion, gorgonziola and local wine.',
	},
	{
		name: 'Tsiprela',
		price: '€11',
		description: 'Pasta with tsipouro, tomato and creme in clay pot.',
	},
	{
		name: 'Krithariera',
		price: '€9',
		description: 'Orzo with burned leek and sauce from spiced graviera.',
	},
	{
		name: 'Mush burger',
		price: '€12',
		description:
			'Vegetarian burger with fried oyster mushrooms and fried potatoes.',
	},
];

export function loadMenu() {
	const content = document.querySelector('#content');
	content.classList.add('menu-page');

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
	headline.textContent = 'Menu';
	headline.classList.add('page-title');
	content.appendChild(headline);

	const list = document.createElement('ul');
	list.classList.add('menu');

	function createMenuItem(title, price, description) {
		const listItem = document.createElement('li');
		listItem.classList.add('menu-item');

		const itemName = document.createElement('h3');
		itemName.textContent = title;

		const itemPrice = document.createElement('span');
		itemPrice.textContent = price;
		itemPrice.classList.add('item-price');

		const itemDescription = document.createElement('p');
		itemDescription.textContent = description;

		listItem.appendChild(itemName);
		itemName.appendChild(itemPrice);
		listItem.appendChild(itemDescription);

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
