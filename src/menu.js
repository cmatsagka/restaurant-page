import restaurantLogo from './assets/restaurant.png';

const menuItems = [
	{
		name: 'Local Sourdough',
		price: '€5',
		description: 'Served with salted butter.',
	},
	{
		name: 'Roasted Carrots',
		price: '€12',
		description: 'Honey glazed with thyme.',
	},
	{
		name: 'Bistro Burger',
		price: '€18',
		description: 'Local beef with secret sauce.',
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

	for (let i = 0; i < menuItems.length; i++) {
		const listItem = document.createElement('li');
		listItem.classList.add('menu-item');

		const itemName = document.createElement('h3');
		itemName.textContent = menuItems[i].name;

		const itemPrice = document.createElement('span');
		itemPrice.textContent = menuItems[i].price;
		itemPrice.classList.add('item-price');

		const itemDescription = document.createElement('p');
		itemDescription.textContent = menuItems[i].description;

		listItem.appendChild(itemName);
		itemName.appendChild(itemPrice);
		listItem.appendChild(itemDescription);

		list.appendChild(listItem);
	}

	content.appendChild(list);
}
