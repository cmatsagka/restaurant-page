import restaurantLogo from './assets/restaurant.png';

export function loadPage() {
    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.textContent = "Zoumi";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "A modern bistro based on quality local products.";
    content.appendChild(description);

    const image = document.createElement('img');
    image.src = restaurantLogo;
    image.alt = "Zoumi Bistro logo";
    content.appendChild(image);
}