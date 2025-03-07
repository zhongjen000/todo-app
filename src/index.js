import { createHomeTab } from './home.js';
import { createAboutTab } from './about.js';
import { createContactTab } from './contact.js';

function loadTab(tabFunction) {
    const content = document.getElementById('content');
    content.innerHTML = tabFunction(); // Directly set the HTML content
}

// Wrap all DOM interactions in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home-btn').addEventListener('click', () => loadTab(createHomeTab));
    document.getElementById('about-btn').addEventListener('click', () => loadTab(createAboutTab));
    document.getElementById('contact-btn').addEventListener('click', () => loadTab(createContactTab));

    // Default tab load
    loadTab(createHomeTab);
});
