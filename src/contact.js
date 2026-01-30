import restaurantLogo from './assets/restaurant.png';

export function loadContact() {
	const content = document.querySelector('#content');
	content.classList.add('contact-page');

	const logoName = document.createElement('div');
	logoName.classList.add('logo-name');
	content.appendChild(logoName);

	const pageHeader = document.createElement('div');
	pageHeader.classList.add('page-header');
	content.appendChild(pageHeader);

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
	headline.textContent = 'Contact Us';
	headline.classList.add('page-title');

	pageHeader.appendChild(headline);
	pageHeader.appendChild(logoName);
	content.appendChild(pageHeader);

	const infoContainer = document.createElement('div');
	infoContainer.classList.add('contact-container');

	function createContactSection(title, lines) {
		const section = document.createElement('div');
		section.classList.add('contact-section');

		const h3 = document.createElement('h3');
		h3.textContent = title;
		section.appendChild(h3);

		lines.forEach((text) => {
			const p = document.createElement('p');
			p.textContent = text;
			section.appendChild(p);
		});

		return section;
	}

	infoContainer.appendChild(
		createContactSection('Find Us', [
			'123 Sourdough Lane, Bread District',
			'Athens, Greece',
		])
	);

	infoContainer.appendChild(
		createContactSection('Opening Hours', [
			'Mon - Thu: 12:00 - 00:00',
			'Fri - Sun: 12:00 - 02:00',
		])
	);

	infoContainer.appendChild(
		createContactSection('Reservations', [
			'+30 1234567891',
			'hello@zoumi-bistro.com',
		])
	);

	content.appendChild(infoContainer);

	const form = document.createElement('form');
	form.classList.add('contact-form');

	function createFormFields(fieldName, fieldType, fieldPlaceholder) {
		const formGroup = document.createElement('div');
		formGroup.classList.add('form-group');

		form.appendChild(formGroup);

		const label = document.createElement('label');
		label.textContent = fieldName;

		const nameInput = document.createElement('input');
		nameInput.type = fieldType;

		nameInput.placeholder = fieldPlaceholder;

		formGroup.appendChild(label);
		formGroup.appendChild(nameInput);

		return formGroup;
	}

	form.appendChild(createFormFields('Name', 'text', 'Your name goes here'));

	form.appendChild(createFormFields('Name', 'text', 'Your name goes here'));

	content.appendChild(form);
}
