const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});