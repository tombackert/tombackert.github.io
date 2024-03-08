// script.js

window.addEventListener('scroll', function () {
    var footer = document.querySelector('footer');
    var navbar = document.getElementById('navbar');

    // Überprüfen, ob der Footer im Sichtbereich ist
    var footerPosition = footer.getBoundingClientRect().top;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    var footerVisible = footerPosition < viewportHeight;

    if (footerVisible) {
        navbar.classList.add('hidden'); // Navbar ausblenden
    } else {
        navbar.classList.remove('hidden'); // Navbar anzeigen
    }
});
