document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Seleccionamos el botón y el menú
const menuToggle = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('#navbarNav');

// Añadimos el evento click para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera del mismo (opcional)
document.addEventListener('click', (event) => {
    if (!navbarNav.contains(event.target) && !menuToggle.contains(event.target)) {
        navbarNav.classList.remove('show');
    }
});



