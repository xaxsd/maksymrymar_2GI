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

    // Gestão de tooltip do usuário
    const userTooltip = document.getElementById('user-tooltip');
    const userIcon = document.getElementById('user-icon');

    // Obtendo dados do usuário do localStorage
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));

    // Se o usuário existe no localStorage, mostra as informações
    if (storedUser) {
        const userName = storedUser.email; // Ou adicione o nome do usuário
        const userEmail = storedUser.email;

        // Mostrar informações do usuário ao passar o mouse sobre o ícone
        userIcon.addEventListener('mouseover', () => {
            userTooltip.textContent = `${userName} (${userEmail})`;
        });

        // Limpar o texto ao mover o mouse para fora do ícone
        userIcon.addEventListener('mouseout', () => {
            userTooltip.textContent = "Informações do usuário";
        });
    }

    // Atualização da estatística em tempo real
    const visitorsCount = document.getElementById('visitors-count');
    const pageViewsCount = document.getElementById('page-views');
    const likesCount = document.getElementById('likes-count');

    let visitors = Math.floor(Math.random() * 100);  // Quantidade estável de visitantes (começa com 100)
    let pageViews = 500;  // Quantidade inicial de visualizações (começa com 500)
    let likes = 0;        // Quantidade inicial de likes (começa com 0)

    // Função para atualizar as estatísticas na página
    function updateStatistics() {
        // Quantidade estável de visitantes: flutuações aleatórias
        visitors += Math.floor(Math.random() * 5) - 2; // Pequenas flutuações
        visitors = Math.max(0, Math.min(500, visitors)); // Limitar entre 0 e 500

        // Aumentar as visualizações e os likes
        pageViews += Math.floor(Math.random() * 5) + 1; // Aumento aleatório de visualizações
        likes += Math.floor(Math.random() * 3) + 1;     // Aumento aleatório de likes

        // Atualiza os elementos na página
        visitorsCount.textContent = visitors;
        pageViewsCount.textContent = pageViews;
        likesCount.textContent = likes;

        // Debug: Exibe no console
        console.log("Estatísticas atualizadas:", { visitors, pageViews, likes });
    }

    // Carrega as estatísticas iniciais
    updateStatistics();

    // Atualiza as estatísticas a cada segundo
    setInterval(updateStatistics, 1000);  // Atualiza a cada 1 segundo
});
