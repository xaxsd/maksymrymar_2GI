document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos da página
    const themeToggle = document.getElementById('theme-toggle'); // Botão para alternar o tema
    const body = document.body; // Corpo da página
    const themes = ['light', 'dark', 'yellow', 'green', 'purple']; // Lista de temas disponíveis
    let currentTheme = localStorage.getItem('theme') || 'light'; // Obtém o tema salvo ou define o tema inicial como 'light'

    // Aplica o tema salvo ao carregar a página
    body.classList.add(`${currentTheme}-theme`); // Adiciona a classe do tema ao corpo da página
    themeToggle.textContent = `${capitalize(currentTheme)} Theme`; // Atualiza o texto do botão com o nome do tema atual

    // Alterna o tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        let nextTheme = getNextTheme(currentTheme); // Obtém o próximo tema
        body.classList.remove(`${currentTheme}-theme`); // Remove a classe do tema atual
        body.classList.add(`${nextTheme}-theme`); // Adiciona a classe do próximo tema
        currentTheme = nextTheme; // Atualiza a variável currentTheme para o próximo tema
        themeToggle.textContent = `${capitalize(nextTheme)} Theme`; // Atualiza o texto do botão com o nome do novo tema
        localStorage.setItem('theme', currentTheme); // Salva o novo tema no localStorage
    });

    // Função para obter o próximo tema na lista cíclica
    function getNextTheme(current) {
        let currentIndex = themes.indexOf(current); // Encontra o índice do tema atual
        let nextIndex = (currentIndex + 1) % themes.length; // Calcula o índice do próximo tema (ciclo)
        return themes[nextIndex]; // Retorna o próximo tema da lista
    }

    // Função para capitalizar a primeira letra de uma string
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1); // Torna a primeira letra maiúscula
    }
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

    document.addEventListener("DOMContentLoaded", function() {
        const formTypeSelect = document.querySelector('select[name="form_type"]');
        const feedbackQuestion = document.getElementById("feedback-question");
        const supportQuestion = document.getElementById("support-question");
    
        formTypeSelect.addEventListener("change", function() {
            // Esconde todas as perguntas adicionais por padrão
            feedbackQuestion.style.display = "none";
            supportQuestion.style.display = "none";
    
            // Exibe a pergunta correta com base na opção selecionada
            if (formTypeSelect.value === "support") {
                supportQuestion.style.display = "block";
            } else if (formTypeSelect.value === "feedback") {
                feedbackQuestion.style.display = "block";
            }
        });
    });