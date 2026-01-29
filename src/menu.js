import restaurantLogo from './assets/restaurant.png';

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

		const itemHeader = document.createElement('div');
		itemHeader.classList.add('menu-item-header');

		const itemName = document.createElement('h3');
		itemName.textContent = title;

		const itemPrice = document.createElement('span');
		itemPrice.textContent = price;
		itemPrice.classList.add('item-price');

		const itemDescription = document.createElement('p');
		itemDescription.textContent = description;

		itemHeader.appendChild(itemName);
		itemHeader.appendChild(itemPrice);
		listItem.appendChild(itemHeader);
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
