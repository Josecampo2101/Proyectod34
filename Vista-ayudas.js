document.addEventListener('DOMContentLoaded', function() {
const sidebar = document.querySelector('.sidebar');
const menuIndicator = document.getElementById('menu-indicator');
const hasSubmenus = document.querySelectorAll('.has-submenu');
const centerContent = document.querySelector('.center-content');

function showSubmenusOnHover() {
    hasSubmenus.forEach(item => {
        item.addEventListener('mouseover', function() {
            if (!sidebar.classList.contains('collapsed')) {
                const submenu = item.querySelector('.submenu');
                if (submenu) {
                    item.classList.add('show');
                }
            }
        });

        item.addEventListener('mouseout', function() {
            if (!sidebar.classList.contains('collapsed')) {
                item.classList.remove('show');
            }
        });
    });
}

function toggleSidebar() {
    const isCollapsed = sidebar.classList.toggle('collapsed');
    centerContent.classList.toggle('collapsed');

    if (isCollapsed) {

        hasSubmenus.forEach(item => {
            item.classList.remove('show');
        });
    } else {
        showSubmenusOnHover();
    }
}

menuIndicator.addEventListener('click', toggleSidebar);

const logoutButton = document.getElementById('logout-button');
logoutButton.addEventListener('click', function() {
    // Aquí puedes agregar la funcionalidad de cierre de sesión
    alert('Cerrar Sesión');
});


showSubmenusOnHover();
});
