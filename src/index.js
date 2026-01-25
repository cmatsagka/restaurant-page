import './styles.css';
import restaurantLogo from './assets/restaurant.png';

const image = document.createElement('img');
image.src = restaurantLogo;

document.body.appendChild(image);

console.log("The Restaurant is open!");