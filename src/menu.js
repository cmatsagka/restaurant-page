import restaurantLogo from './assets/restaurant.png';

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

}