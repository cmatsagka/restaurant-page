Zoumi Bistro - SPA Restaurant Page

A high-performance, responsive Single Page Application (SPA) built for The Odin Project. This project moves away from traditional multi-page architecture, instead using vanilla JavaScript to dynamically manage the DOM.

Live Demo: https://cmatsagka.github.io/restaurant-page/

The Challenge

The core requirement was to build a restaurant site where the entire content is generated via JavaScript. The goal was to master ES6 modules, Webpack bundling, and dynamic DOM manipulation without relying on multiple HTML files.

Technical Improvements & "Professional" Polish

While the basic requirement was simply to switch tabs, I implemented several "Level 2" features to make the site feel more like a production-ready application:

1. Modular "Helper" Architecture
   Instead of repeating document.createElement hundreds of times, I utilized a modular approach to build sections. This keeps the code DRY (Don't Repeat Yourself) and makes the site extremely easy to scale. If I wanted to add 10 more menu items, I simply call the existing creation logic.

2. Navigation "Flex-Wrap" Strategy
   I made a deliberate design choice to ditch the traditional hidden "Burger Menu" for mobile. Instead, I used a smart Flex-Wrap navigation.

Why? It reduces "interaction cost" (fewer clicks for the user).

Execution: On mobile, the menu items wrap into a centered, thumb-friendly grid that maintains the bistro's minimalist aesthetic without hiding links behind a button.

3. The "Animation Reset" Trick
   One common issue with SPAs is that entry animations only play once. I implemented a DOM Reflow technique in index.js:

JavaScript
content.style.animation = 'none';
content.offsetHeight;
content.style.animation = null;
This ensures that every time a user switches from "Home" to "Menu," the content fades in smoothly, creating a premium "App-like" feel.

4. State-Aware UI
   The navigation doesn't just switch content; it manages state. The setActiveButton logic ensures the user always knows exactly where they are, and I've disabled hover/active effects on the "currently active" tab to prevent confusing UI feedback on mobile devices.

Tooling

Webpack: Used for bundling JS and processing CSS imports.

ES6 Modules: Separation of concerns between page logic (about.js, menu.js, etc.).

CSS Variables: For a unified color palette and easy "theming."

Installation

# Install dependencies

npm install

# Start dev server

npm start
