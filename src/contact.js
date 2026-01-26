import restaurantLogo from './assets/restaurant.png';

export function loadContact() {
    const content = document.querySelector('#content');
    content.classList.add('contact-page');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = "Zoumi";
    content.appendChild(restaurantName);

    const image = document.createElement('img');
    image.src = restaurantLogo;
    image.alt = "Zoumi Bistro logo";
    content.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Contact";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "Contact us and book a spot!";
    content.appendChild(description);
}