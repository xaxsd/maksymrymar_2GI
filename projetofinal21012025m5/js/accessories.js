document.addEventListener('DOMContentLoaded', () => {
    // Alternância de tema
    const themeToggle = document.getElementById('theme-toggle'); // Botão de alternância de tema
    const body = document.body; // Corpo da página
    const themes = ['light', 'dark', 'yellow', 'green', 'purple']; // Lista de temas disponíveis
    let currentTheme = localStorage.getItem('theme') || 'light'; // Obtém o tema salvo ou define o tema inicial como 'light'

    // Aplica o tema atual ao carregar a página
    body.classList.add(`${currentTheme}-theme`); 
    themeToggle.textContent = `${capitalize(currentTheme)} Theme`; // Exibe o nome do tema no botão

    // Alterna o tema ao clicar no botão
    themeToggle.addEventListener('click', () => {
        let nextTheme = getNextTheme(currentTheme); // Obtém o próximo tema
        body.classList.remove(`${currentTheme}-theme`); // Remove o tema atual
        body.classList.add(`${nextTheme}-theme`); // Adiciona o próximo tema
        currentTheme = nextTheme; // Atualiza o tema atual
        themeToggle.textContent = `${capitalize(nextTheme)} Theme`; // Atualiza o texto do botão
        localStorage.setItem('theme', currentTheme); // Salva o tema atual no localStorage
    });

    // Função para obter o próximo tema da lista
    function getNextTheme(current) {
        let currentIndex = themes.indexOf(current); // Encontra o índice do tema atual
        let nextIndex = (currentIndex + 1) % themes.length; // Obtém o índice do próximo tema, com ciclo
        return themes[nextIndex]; // Retorna o próximo tema
    }

    // Função para capitalizar a primeira letra de uma string
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1); // Torna a primeira letra maiúscula
    }

    // Filtragem de produtos
    const filterForm = document.querySelector('.filters form'); // Obtém o formulário de filtros
    const products = document.querySelectorAll('.product'); // Obtém todos os produtos na página
    
    // Adiciona um evento de envio ao formulário
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o recarregamento da página ao enviar o formulário
        
        // Obtém os valores dos filtros
        const categoryFilter = document.getElementById('category').value; // Filtro de categoria selecionado
        const minPrice = parseFloat(document.getElementById('min-price').value) || 0; // Filtro de preço mínimo
        const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity; // Filtro de preço máximo

        // Itera sobre todos os produtos
        products.forEach(product => {
            const productCategory = product.dataset.category; // Obtém a categoria do produto
            const productPrice = parseFloat(product.dataset.price); // Obtém o preço do produto

            // Verifica se o produto corresponde aos filtros de categoria e preço
            const matchesCategory = categoryFilter === 'all' || productCategory === categoryFilter;
            const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

            // Mostra ou oculta o produto com base nos filtros
            if (matchesCategory && matchesPrice) {
                product.style.display = 'block'; // Exibe o produto
            } else {
                product.style.display = 'none'; // Oculta o produto
            }
        });
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