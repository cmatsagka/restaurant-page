import './styles.css';
import restaurantLogo from './assets/restaurant.png';
import { loadPage } from './initial-page-load';

const image = document.createElement('img');
image.src = restaurantLogo;

document.body.appendChild(image);

loadPage();