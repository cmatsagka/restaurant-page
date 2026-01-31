export function el(type, props = {}, ...children) {
	const dom = document.createElement(type);

	if (props.className) {
		dom.className = props.className;
	}
	if (props.textContent) {
		dom.textContent = props.textContent;
	}
	if (props.src) {
		dom.src = props.src;
	}

	Object.keys(props).forEach((key) => {
		const specialProps = ['className', 'textContent', 'src'];
		if (key.startsWith('on') || specialProps.includes(key)) {
			dom[key] = props[key];
		} else {
			dom.setAttribute(key, props[key]);
		}
	});

	children.forEach((child) => {
		if (typeof child === 'string') {
			dom.appendChild(document.createTextNode(child));
		} else if (child instanceof Node) {
			dom.appendChild(child);
		}
	});
	return dom;
}
