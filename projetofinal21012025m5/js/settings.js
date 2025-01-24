document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos da página
    const themeToggle = document.getElementById('theme-toggle'); // Botão para alternar o tema
    const body = document.body; // Corpo da página
    const themes = ['light', 'dark', 'yellow', 'green', 'purple']; // Lista de temas disponíveis
    const usernameInput = document.getElementById('username');  // Campo para o nome de usuário
    const languageSelect = document.getElementById('language');  // Seleção de idioma
    const themeSelect = document.getElementById('theme');  // Seleção de tema
    const fontSizeSelect = document.getElementById('font-size');  // Seleção de tamanho da fonte
    const timezoneSelect = document.getElementById('timezone');  // Seleção de fuso horário
    const emailNotificationsCheckbox = document.getElementById('email-notifications');  // Caixa de seleção para notificações por e-mail
    const twoFactorAuthCheckbox = document.getElementById('two-factor-auth');  // Caixa de seleção para autenticação de dois fatores
    const saveButton = document.getElementById('save-settings');  // Botão para salvar as configurações

    // Obtém o tema salvo ou define o tema inicial como 'light'
    let currentTheme = localStorage.getItem('theme') || 'light';
    // Aplica o tema salvo ao carregar a página
    body.classList.add(`${currentTheme}-theme`);
    themeToggle.textContent = `${capitalize(currentTheme)} Theme`;

    // Alterna o tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        let nextTheme = getNextTheme(currentTheme);
        body.classList.remove(`${currentTheme}-theme`);
        body.classList.add(`${nextTheme}-theme`);
        currentTheme = nextTheme;
        themeToggle.textContent = `${capitalize(nextTheme)} Theme`;
        localStorage.setItem('theme', currentTheme); // Salva o novo tema no localStorage
    });

    // Função para obter o próximo tema na lista cíclica
    function getNextTheme(current) {
        let currentIndex = themes.indexOf(current);
        let nextIndex = (currentIndex + 1) % themes.length;
        return themes[nextIndex];
    }

    // Função para capitalizar a primeira letra de uma string
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Carrega as configurações do arquivo JSON
    fetch('../data.json')
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            // Acessa as configurações do usuário no arquivo JSON
            const settings = data.userSettings;

            // Preenche os campos com os valores das configurações
            usernameInput.value = settings.username;
            languageSelect.value = settings.language;
            themeSelect.value = settings.theme;
            fontSizeSelect.value = settings.fontSize;
            timezoneSelect.value = settings.timezone;
            emailNotificationsCheckbox.checked = settings.emailNotifications;
            twoFactorAuthCheckbox.checked = settings.twoFactorAuth;
        })
        .catch(error => console.error('Error loading settings:', error));

    // Salva as configurações quando o usuário clicar no botão "Save"
    saveButton.addEventListener('click', () => {
        // Cria um objeto com as configurações atualizadas
        const updatedSettings = {
            username: usernameInput.value,
            language: languageSelect.value,
            theme: themeSelect.value,  // Obtém o valor do tema
            fontSize: fontSizeSelect.value,
            timezone: timezoneSelect.value,
            emailNotifications: emailNotificationsCheckbox.checked,
            twoFactorAuth: twoFactorAuthCheckbox.checked
        };

        // Exibe as configurações salvas no console (para fins de desenvolvimento)
        console.log('Saved settings:', updatedSettings);

        // Exibe uma mensagem de sucesso
        alert('Settings saved!');
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        const userTooltip = document.getElementById('user-tooltip');
        const userIcon = document.getElementById('user-icon');

        // Отримуємо дані про користувача з localStorage
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));

        // Якщо користувач є в localStorage, відображаємо його дані
        if (storedUser) {
            const userName = storedUser.email; // Або додати ім'я користувача
            const userEmail = storedUser.email;

            // Показати інформацію про користувача при наведенні на іконку
            userIcon.addEventListener('mouseover', () => {
                userTooltip.textContent = `${userName} (${userEmail})`;
            });

            // Якщо потрібно, можна очистити текст при відведенні курсору
            userIcon.addEventListener('mouseout', () => {
                userTooltip.textContent = "Інформація про користувача";
            });
        }
    });