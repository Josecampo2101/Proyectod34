document.addEventListener('DOMContentLoaded', function() {
    const changingTextElement = document.getElementById('changingText');
    const words = ['Amor', 'Verdad', 'Justicia', 'Unidad', 'Autoridad', 'Libertad', 'Santidad'];
    let currentIndex = 0;

    function changeText() {
        const currentWord = words[currentIndex];
        changingTextElement.innerHTML = '';

        for (let i = 0; i < currentWord.length; i++) {
            const span = document.createElement('span');
            span.textContent = currentWord[i];
            span.classList.add('letter');
            span.style.animationDelay = `${i * 0.1}s`;
            changingTextElement.appendChild(span);
        }

        currentIndex = (currentIndex + 1) % words.length;
    }

    changeText();
    setInterval(changeText, 3000);

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
