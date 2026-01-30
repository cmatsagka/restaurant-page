import restaurantLogo from './assets/restaurant.png';
import { el } from './domUtils.js';

export function loadContact() {
	const content = document.querySelector('#content');
	content.classList.add('contact-page');

	const logoName = el(
		'div',
		{ className: 'logo-name' },
		el('h2', {
			textContent: 'Zoumi',
			className: 'restaurant-name',
		}),
		el('img', {
			src: restaurantLogo,
			alt: 'Zoumi Bistro logo',
			className: 'logo-small',
		})
	);

	const pageHeader = el(
		'div',
		{ className: 'page-header' },
		el('h1', { className: 'page-title', textContent: 'Contact Us' })
	);

	pageHeader.appendChild(logoName);
	content.appendChild(pageHeader);

	const infoContainer = el(
		'div',
		{ className: 'contact-container' },
		createContactSection('Find Us', [
			'123 Sourdough Lane, Bread District',
			'Athens, Greece',
		]),
		createContactSection('Opening Hours', [
			'Mon - Thu: 12:00 - 00:00',
			'Fri - Sun: 12:00 - 02:00',
		]),
		createContactSection('Reservations', [
			'+30 1234567891',
			'hello@zoumi-bistro.com',
		])
	);

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

	content.appendChild(infoContainer);

	const form = el('form', { className: 'contact-form' });

	function createFormFields(
		fieldName,
		fieldType,
		fieldPlaceholder,
		isRequired
	) {
		const formGroup = document.createElement('div');
		formGroup.classList.add('form-group');

		const label = document.createElement('label');
		label.textContent = fieldName;

		const nameInput = document.createElement('input');
		nameInput.type = fieldType;

		nameInput.placeholder = fieldPlaceholder;

		nameInput.required = isRequired;

		formGroup.appendChild(label);
		formGroup.appendChild(nameInput);

		return formGroup;
	}

	function createFormDropdown(dropdownOption) {
		const formDrop = document.createElement('div');
		formDrop.classList.add('form-dropdown');

		const label = document.createElement('label');
		label.textContent = 'Subject';

		const dropdown = document.createElement('select');

		dropdownOption.forEach((text) => {
			const option = document.createElement('option');
			option.textContent = text;

			dropdown.appendChild(option);
		});

		dropdown.required = true;

		formDrop.appendChild(label);
		formDrop.appendChild(dropdown);

		return formDrop;
	}

	const formTxt = document.createElement('div');
	formTxt.classList.add('form-txt-area');

	const label = document.createElement('label');
	label.textContent = 'Write a message to us';

	const textArea = document.createElement('textarea');
	textArea.placeholder = 'This is where you type...';
	textArea.required = true;

	formTxt.appendChild(label);
	formTxt.appendChild(textArea);

	const formSubmit = document.createElement('div');
	formSubmit.classList.add('form-submit');

	const submitBtn = document.createElement('button');
	submitBtn.classList.add('submit-btn');
	submitBtn.textContent = 'Submit';
	submitBtn.type = 'submit';

	formSubmit.appendChild(submitBtn);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		form.classList.add('submitted');

		form.replaceChildren();

		const title = document.createElement('h3');
		title.textContent = 'Thank you!';

		const p1 = document.createElement('p');
		p1.textContent = 'We have received your message.';
		const p2 = document.createElement('p');
		p2.textContent = 'We will get back to you soon.';

		form.append(title, p1, p2);
	});

	form.appendChild(
		createFormFields('Name', 'text', 'Your name goes here', true)
	);
	form.appendChild(createFormFields('Email', 'email', 'Your email', true));
	form.appendChild(
		createFormDropdown(['Reservation', 'Private Event', 'General'])
	);
	form.appendChild(formTxt);
	form.appendChild(formSubmit);

	content.appendChild(form);
}
