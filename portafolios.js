document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const menuIndicator = document.getElementById('menu-indicator');
    const hasSubmenus = document.querySelectorAll('.has-submenu');
    const centerContent = document.querySelector('.center-content');

    function toggleSidebar() {
        const isCollapsed = sidebar.classList.toggle('collapsed');
        centerContent.classList.toggle('collapsed');

        if (isCollapsed) {
            hasSubmenus.forEach(item => item.classList.remove('show'));
        }
    }

    menuIndicator.addEventListener('click', toggleSidebar);

    // Funcionalidad para mostrar los submenús
    hasSubmenus.forEach(function(menu) {
        menu.addEventListener('click', function(event) {
            // Evitar que el enlace principal redirija
            event.preventDefault();

            // Cerrar otros submenús abiertos
            hasSubmenus.forEach(item => {
                if (item !== menu) {
                    item.classList.remove('show');
                }
            });

            // Mostrar u ocultar el submenú actual
            menu.classList.toggle('show');
        });
    });

    // Funcionalidad del acordeón
    var accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            var content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
