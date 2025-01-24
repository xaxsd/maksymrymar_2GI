document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementById('close-btn');
    const yesBtn = document.getElementById('yes-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themes = ['light', 'dark', 'yellow', 'green', 'purple'];
    let currentTheme = localStorage.getItem('theme') || 'light';

    // Aplicar o tema ao carregar a página
    body.classList.add(`${currentTheme}-theme`);
    themeToggle.textContent = `${capitalize(currentTheme)} Theme`;

    // Alternar tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        let nextTheme = getNextTheme(currentTheme);
        body.classList.remove(`${currentTheme}-theme`);
        body.classList.add(`${nextTheme}-theme`);
        currentTheme = nextTheme;
        themeToggle.textContent = `${capitalize(nextTheme)} Theme`;
        localStorage.setItem('theme', currentTheme);
    });

    // Função para obter o próximo tema
    function getNextTheme(current) {
        let currentIndex = themes.indexOf(current);
        let nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
    }

    // Função para capitalizar a primeira letra
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Modal Termos e Condições
    if (!localStorage.getItem('modalShown')) {
        modal.setAttribute('aria-hidden', 'false');
        localStorage.setItem('modalShown', 'true');
    }

    closeBtn.addEventListener('click', () => {
        modal.setAttribute('aria-hidden', 'true');
    });

    yesBtn.addEventListener('click', () => {
        alert('Você aceitou os Termos e Condições.');
        modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.setAttribute('aria-hidden', 'true');
        }
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const userTooltip = document.getElementById('user-tooltip');
        const userIcon = document.getElementById('user-icon');

        // Отримуємо дані про користувача з localStorage
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));

        // Якщо користувач є в localStorage, відображаємо його дані
        if (storedUser) {
            const userNickname = storedUser.nickname; // Або додати ім'я користувача
            const userEmail = storedUser.email;

            // Показати інформацію про користувача при наведенні на іконку
            userIcon.addEventListener('mouseover', () => {
                userTooltip.textContent = `${userNickname} (${userEmail})`;
            });

            // Якщо потрібно, можна очистити текст при відведенні курсору
            userIcon.addEventListener('mouseout', () => {
                userTooltip.textContent = "Інформація про користувача";
            });
        }
    });