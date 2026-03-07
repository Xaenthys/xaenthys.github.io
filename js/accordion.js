'use strict';

document.addEventListener('DOMContentLoaded', () => {
    for (const trigger of document.querySelectorAll('.accordion-trigger')) {
        const panel = trigger.nextElementSibling;

        // Initialize all panels collapsed
        trigger.setAttribute('aria-expanded', 'false');
        panel.style.maxHeight = '0px';

        trigger.addEventListener('click', () => {
            const isOpen = trigger.getAttribute('aria-expanded') === 'true';
            trigger.setAttribute('aria-expanded', String(!isOpen));
            panel.style.maxHeight = isOpen ? '0px' : panel.scrollHeight + 'px';
        });
    }
});
