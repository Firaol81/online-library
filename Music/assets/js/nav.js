// nav.js
document.addEventListener('DOMContentLoaded', () => {
    // Get the hamburger icon and the navigation list
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navLinks = document.getElementById('nav-links');

    // Toggle the active class when the hamburger icon is clicked
    hamburgerIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
