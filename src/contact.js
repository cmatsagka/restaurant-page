import zoumiLogo from './assets/zoumiLogo.svg';
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
			src: zoumiLogo,
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
		const section = el(
			'div',
			{ className: 'contact-section' },
			el('h3', { textContent: title }),
			...lines.map((text) => el('p', { textContent: text }))
		);

		return section;
	}

	function createFormFields(
		fieldName,
		fieldType,
		fieldPlaceholder,
		isRequired
	) {
		const formGroup = el(
			'div',
			{ className: 'form-group' },
			el('label', { textContent: fieldName }),
			el('input', {
				type: fieldType,
				placeholder: fieldPlaceholder,
				required: isRequired,
			})
		);

		return formGroup;
	}

	function createFormDropdown(dropdownOption) {
		const formDrop = el(
			'div',
			{ className: 'form-dropdown' },
			el('label', { textContent: 'Subject', for: 'subject-select' }),
			el(
				'select',
				{ id: 'subject-select', name: 'subject', required: true },
				...dropdownOption.map((optionText) =>
					el('option', {
						textContent: optionText,
					})
				)
			)
		);
		return formDrop;
	}

	const formTxt = el(
		'div',
		{ className: 'form-txt-area' },
		el('label', { textContent: 'Write a message to us' }),
		el('textarea', {
			placeholder: 'This is where you type...',
			required: true,
		})
	);

	const formSubmit = el(
		'div',
		{ className: 'form-submit' },
		el('button', {
			textContent: 'Submit',
			className: 'submit-btn',
			type: 'submit',
		})
	);

	const form = el(
		'form',
		{ className: 'contact-form' },
		createFormFields('Name', 'text', 'Your name goes here', true),
		createFormFields('Email', 'email', 'Your email', true),
		createFormDropdown(['Reservation', 'Private Event', 'General']),
		formTxt,
		formSubmit
	);

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		form.classList.add('submitted');

		form.replaceChildren(
			el('h2', { textContent: 'Thank you!' }),
			el('p', { textContent: 'We have received your message.' }),
			el('p', { textContent: 'We will get back to you soon.' })
		);
	});

	const contactWrapper = el(
		'div',
		{ className: 'contact-wrapper' },
		infoContainer,
		form
	);

	content.appendChild(contactWrapper);
}
