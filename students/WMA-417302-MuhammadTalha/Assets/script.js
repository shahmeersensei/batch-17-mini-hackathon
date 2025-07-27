document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.getElementById('navbarToggler');
    const menu = document.getElementById('navbarMenu');
    const cancelMenu = document.getElementById('cancelNavbar');

    toggler.addEventListener('click', function () {
        menu.classList.add('active'); // Open menu
    });

    cancelMenu.addEventListener('click', function () {
        menu.classList.remove('active'); // Close menu
    });
});