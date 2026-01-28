import restaurantLogo from './assets/restaurant.png';

export function loadAbout() {
    const content = document.querySelector('#content');
    content.classList.add('about-page');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = "Zoumi";
    restaurantName.classList.add('restaurant-name');
    content.appendChild(restaurantName);

    const image = document.createElement('img');
    image.src = restaurantLogo;
    image.alt = "Zoumi Bistro logo";
    image.classList.add('logo-small');
    content.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "About";
    headline.classList.add('page-title');
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "A modern bistro based on quality local products.";
    description.classList.add('page-descr');
    content.appendChild(description);
}