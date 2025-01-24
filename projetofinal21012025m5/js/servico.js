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


// Lista de autossserviços
const services = [
    {
        name: "Centro de serviço automóvel “Service plus'",  // Nome do serviço
        city: "Kiev",  // Cidade onde o serviço está localizado
        address: "############",  // Endereço completo
        phone: "+############",  // Número de telefone
        services: ["Reparação de motores, montagem de pneus, reparação de transmissões"],  // Serviços oferecidos
        image: "service1.jpg"  // Caminho da imagem do serviço
    },
    {
        name: "Centro de serviço automóvel 'Oficina automóvel'",
        city: "Lviv",
        address: "############",
        phone: "+############",
        services: ["Manutenção do sistema de travões”, ”Reparação de carroçarias"],
        image: "service2.jpg"
    },
    {
        name: "Centro de assistência automóvel 'Techno Service'",
        city: "Odesa",
        address: "############",
        phone: "+############",
        services: ["Diagnóstico informático”, ”Reparação de eletrónica"],
        image: "service3.jpg"
    }
];

// Função para exibir os autossserviços na página
function displayServices(filteredServices) {
    const container = document.getElementById("serviceList");  // Obtém o elemento HTML onde os serviços serão exibidos
    container.innerHTML = "";  // Limpa o conteúdo anterior da lista

    // Para cada serviço filtrado, cria-se um item de serviço
    filteredServices.forEach(service => {
        const serviceItem = document.createElement("div");  // Cria um novo div para o item do serviço
        serviceItem.classList.add("service-item");  // Adiciona a classe 'service-item' para estilização

        // Preenche o conteúdo HTML do item de serviço
        serviceItem.innerHTML = `
            <img src="${service.image}" alt="${service.name}" class="service-image">  <!-- Imagem do serviço -->
            <h3>${service.name}</h3>  <!-- Nome do serviço -->
            <p><strong>Cidade:</strong> ${service.city}</p>  <!-- Cidade do serviço -->
            <p><strong>Endereço:</strong> ${service.address}</p>  <!-- Endereço do serviço -->
            <p><strong>Telefone:</strong> ${service.phone}</p>  <!-- Telefone do serviço -->
            <p><strong>Serviços:</strong> ${service.services.join(", ")}</p>  <!-- Lista de serviços oferecidos -->
        `;

        // Adiciona o item do serviço à lista
        container.appendChild(serviceItem);
    });
}

// Função para filtrar os autossserviços de acordo com a pesquisa do usuário
function filterServices() {
    const searchQuery = document.getElementById("serviceSearch").value.toLowerCase();  // Obtém a consulta de pesquisa digitada pelo usuário

    // Filtra os serviços com base no nome, cidade ou nos tipos de serviço oferecidos
    const filteredServices = services.filter(service => {
        return (
            service.name.toLowerCase().includes(searchQuery) ||  // Verifica se o nome do serviço corresponde à consulta
            service.city.toLowerCase().includes(searchQuery) ||  // Verifica se a cidade do serviço corresponde à consulta
            service.services.some(serviceType => serviceType.toLowerCase().includes(searchQuery))  // Verifica se algum dos serviços oferecidos corresponde à consulta
        );
    });

    // Exibe os serviços filtrados
    displayServices(filteredServices);
}

// Exibe todos os serviços ao carregar a página
window.onload = function() {
    displayServices(services);  // Chama a função para exibir todos os serviços
};

// Função para mostrar ou esconder dicas adicionais
function toggleTips() {
    const tipsContainer = document.getElementById("tips-container");  // Obtém o contêiner de dicas
    const showMoreBtn = document.getElementById("showMoreBtn");  // Obtém o botão que mostra ou esconde as dicas
    
    // Verifica se as dicas estão visíveis ou não
    if (tipsContainer.classList.contains("hidden-tips")) {  // Se as dicas estão ocultas
        tipsContainer.classList.remove("hidden-tips");  // Remove a classe que oculta as dicas
        showMoreBtn.textContent = "Mostrar menos";  // Altera o texto do botão para "Mostrar menos"
    } else {
        tipsContainer.classList.add("hidden-tips");  // Adiciona a classe para esconder as dicas
        showMoreBtn.textContent = "Mostrar mais";  // Altera o texto do botão para "Mostrar mais"
    }
}

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