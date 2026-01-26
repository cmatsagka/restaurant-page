import restaurantLogo from './assets/restaurant.png';

const menuItems = [
    { name: "Local Sourdough", price: "€5", description: "Served with salted butter." },
    { name: "Roasted Carrots", price: "€12", description: "Honey glazed with thyme." },
    { name: "Bistro Burger", price: "€18", description: "Local beef with secret sauce." },
];

export function loadMenu() {
    const content = document.querySelector('#content');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = "Zoumi";
    content.appendChild(restaurantName);

    const image = document.createElement('img');
    image.src = restaurantLogo;
    image.alt = "Zoumi Bistro logo";
    content.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Menu";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Menu items list";
    content.appendChild(description);

    const list = document.createElement('ul');
    
    for (let i = 0; i < menuItems.length; i++) {
        const listItem = document.createElement('li');

        const itemName = document.createElement('h3');
        itemName.textContent = `${menuItems[i].name}`;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `${menuItems[i].price}`;

        const itemDescription= document.createElement('p');
        itemDescription.textContent = `${menuItems[i].description}`;

        listItem.appendChild(itemName);
        listItem.appendChild(itemPrice);
        listItem.appendChild(itemDescription);

        list.appendChild(listItem);
    }
    content.appendChild(list);
}