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
});

document.addEventListener('DOMContentLoaded', function() {
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
