document.addEventListener('DOMContentLoaded', function () {
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
});

const toggleButton = document.getElementById('toggleButton');
const sidebar = document.querySelector('.sidebar');
const sidebarItems = document.querySelectorAll('.sidebar nav ul li');

let sidebarCollapsed = true; 

toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('collapsed');
    sidebarCollapsed = !sidebarCollapsed;


    function handleSubMenuVisibility(item, submenu) {
        const link = item.querySelector('a');
        link.addEventListener('mouseenter', function() {
            if (!sidebarCollapsed) {
                submenu.style.display = 'block';
            }
        });

        link.addEventListener('mouseleave', function() {
            if (!sidebarCollapsed) {
                submenu.style.display = 'none';
            }
        });
    }


    sidebarItems.forEach(item => {
        const submenu = item.querySelector('ul.submenu');
        if (submenu) {
            if (sidebarCollapsed) {
                submenu.style.display = 'none';
            } else {
                handleSubMenuVisibility(item, submenu);
            }
        }

        const link = item.querySelector('a');
        if (sidebarCollapsed) {
            if (link.querySelector('span')) {
                link.querySelector('span').style.display = 'none';
            }
        } else {
            if (link.querySelector('span')) {
                link.querySelector('span').style.display = 'inline';
            }
        }
    });
});


const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMobileLayout(mediaQuery) {
    if (mediaQuery.matches) {
        sidebar.classList.add('collapsed');
        sidebarItems.forEach(item => {
            const submenu = item.querySelector('ul.submenu');
            if (submenu) {
                submenu.style.display = 'none';
            }

            const link = item.querySelector('a');
            if (link.querySelector('span')) {
                link.querySelector('span').style.display = 'none';
            }
        });
    } else {
        sidebar.classList.remove('collapsed');
        sidebarItems.forEach(item => {
            const link = item.querySelector('a');
            if (link.querySelector('span')) {
                link.querySelector('span').style.display = 'inline';
            }
        });
    }
}

handleMobileLayout(mediaQuery); // Llamada inicial

mediaQuery.addListener(handleMobileLayout); // Escuchar cambios en el media query
