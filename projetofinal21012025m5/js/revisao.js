document.addEventListener('DOMContentLoaded', function() {
    // Obtém o formulário de comentários e os elementos necessários
    const commentForm = document.getElementById('comment-form');
    const feedbackField = document.getElementById('feedback');
    const commentsList = document.getElementById('comments-list');

    // Verificação para garantir que os elementos existem na página
    if (commentForm && feedbackField && commentsList) {
        // Evento de envio do formulário de comentários
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();  // Impede o recarregamento da página ao enviar o formulário

            // Obtém o valor do comentário
            let feedback = feedbackField.value;

            // Define o limite máximo de caracteres para o comentário
            const maxLength = 500;

            // Se o comentário exceder o limite, corta para o tamanho máximo
            if (feedback.length > maxLength) {
                feedback = feedback.substring(0, maxLength);
            }

            // Se o comentário não estiver vazio, cria e exibe no topo da lista
            if (feedback.trim() !== '') {
                const li = document.createElement('li');
                li.textContent = feedback;  // Adiciona o texto do comentário ao item da lista

                // Insere o novo comentário no início da lista
                commentsList.insertBefore(li, commentsList.firstChild);

                // Limpa o campo de texto após o envio
                feedbackField.value = '';
            } else {
                alert('Por favor, escreva um comentário!');  // Exibe um alerta caso o campo esteja vazio
            }
        });
    } else {
        console.error('Um dos elementos necessários não está na página!');  // Mensagem de erro se algum elemento faltar
    }

    // Dados dos carros (como exemplo)
    const cars = [
        {
            name: "Alfa Romeo Giulia EV",
            price: 83000,
            country: "Itália",
            releaseYear: 2025,
            range: 700,
            battery: 104,
            maxSpeed: 300,
            power: 1000,
            carType: "sedan",
            driveType: "AWD",
            image: "../imagens/Alfa Romeo Giulia EV.jpg"
        },
        {
            name: "Audi RS5 Avant",
            price: 115000,
            country: "Alemanha",
            releaseYear: 2024,
            range: 600,
            battery: 85,
            maxSpeed: 280,
            power: 450,
            carType: "universal",
            driveType: "AWD",
            image: "../imagens/Audi RS5 Avant.jpg"
        },
        {
            name: "BMW Neue Klasse",
            price: 90000,
            country: "Alemanha",
            releaseYear: 2025,
            range: 700,
            battery: 100,
            maxSpeed: 250,
            power: 600,
            carType: "sedan",
            driveType: "RWD",
            image: "../imagens/BMW Neue Klasse.jpg"
        },
        {
            name: "Ferrari EV Sedan",
            price: 200000,
            country: "Itália",
            releaseYear: 2025,
            range: 500,
            battery: 90,
            maxSpeed: 340,
            power: 1200,
            carType: "sedan",
            driveType: "AWD",
            image: "../imagens/Ferrari EV.png"
        },
        {
            name: "Honda 0 Series",
            price: 85000,
            country: "Japão",
            releaseYear: 2025,
            range: 600,
            battery: 95,
            maxSpeed: 250,
            power: 450,
            carType: "sedan",
            driveType: "AWD",
            image: "../imagens/Honda 0 Series Saloon.jpg"
        },
        {
            name: "Jaguar EV GT",
            price: 150000,
            country: "Reino Unido",
            releaseYear: 2025,
            range: 650,
            battery: 100,
            maxSpeed: 310,
            power: 1000,
            carType: "GT",
            driveType: "AWD",
            image: "../imagens/Jaguar EV GT.jpg"
        },
        {
            name: "Lexus LFR",
            price: 220000,
            country: "Japão",
            releaseYear: 2025,
            range: 550,
            battery: 120,
            maxSpeed: 330,
            power: 1200,
            carType: "sedan",
            driveType: "AWD",
            image: "../imagens/Lexus LFR.jpg"
        },
        {
            name: "Mercedes AMG 4dr EV",
            price: 130000,
            country: "Alemanha",
            releaseYear: 2025,
            range: 600,
            battery: 95,
            maxSpeed: 320,
            power: 1000,
            carType: "sedan",
            driveType: "AWD",
            image: "../imagens/Mercedes AMG 4dr EV.jpg"
        },
        {
            name: "Porsche 718 Boxster EV",
            price: 100000,
            country: "Alemanha",
            releaseYear: 2025,
            range: 450,
            battery: 85,
            maxSpeed: 300,
            power: 800,
            carType: "convertible",
            driveType: "RWD",
            image: "../imagens/Porsche 718 Boxster EV.jpg"
        },
        {
            name: "Volkswagen ID.2",
            price: 25000,
            country: "Alemanha",
            releaseYear: 2025,
            range: 400,
            battery: 50,
            maxSpeed: 180,
            power: 250,
            carType: "hatchback",
            driveType: "FWD",
            image: "../imagens/Volkswagen ID.2.jpg"
        }
    ];

    // Função para exibir os carros filtrados
    function displayCars(filteredCars) {
        const container = document.getElementById("carContainer");
        container.innerHTML = ""; // Очищаємо контейнер перед відображенням нових автомобілів

        filteredCars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");

            // Перевірка на наявність зображення
            const carImage = car.image ? car.image : "../imagens/placeholder.jpg";

            // Створення картки для автомобіля з деталями
            carCard.innerHTML = `
                <img src="${carImage}" alt="${car.name}" class="car-image">
                <div class="car-info">
                    <h2>${car.name}</h2>
                    <p><strong>Preço:</strong> $${car.price}</p>
                    <p><strong>País de origem:</strong> ${car.country}</p>
                    <p><strong>Ano de lançamento:</strong> ${car.releaseYear}</p>
                    <p><strong>Autonomia:</strong> ${car.range} km</p>
                    <p><strong>Bateria:</strong> ${car.battery} kWh</p>
                    <p><strong>Velocidade máxima:</strong> ${car.maxSpeed} km/h</p>
                    <p><strong>Potência:</strong> ${car.power} hp</p>
                    <p><strong>Tipo de carroceria:</strong> ${car.carType}</p>
                    <p><strong>Tipo de tração:</strong> ${car.driveType}</p>
                </div>
            `;
            // Додаємо картку автомобіля до контейнера
            container.appendChild(carCard);
        });
    }

    // Функція фільтрації автомобілів
    function filterCars() {
        // Отримуємо значення з фільтрів
        const priceFilter = parseFloat(document.getElementById("priceFilter").value) || Infinity; // Якщо пусто, використовується безмежність
        const countryFilter = document.getElementById("countryFilter").value;
        const rangeFilter = parseFloat(document.getElementById("rangeFilter").value) || 0; // Якщо пусто, значення 0
        const batteryFilter = parseFloat(document.getElementById("batteryFilter").value) || 0; // Якщо пусто, значення 0

        // Фільтруємо автомобілі на основі введених фільтрів
        const filteredCars = cars.filter(car => {
            return (
                (priceFilter === Infinity || car.price <= priceFilter) && // Перевірка за ціною
                (countryFilter === "" || car.country === countryFilter) && // Перевірка за країною
                (rangeFilter === 0 || car.range >= rangeFilter) && // Перевірка за автономією
                (batteryFilter === 0 || car.battery >= batteryFilter) // Перевірка за батареєю
            );
        });

        // Відображаємо фільтровані автомобілі
        displayCars(filteredCars);
    }

    // Додаємо слухачі подій для фільтрів
    document.getElementById("priceFilter").addEventListener('input', filterCars);
    document.getElementById("countryFilter").addEventListener('change', filterCars);
    document.getElementById("rangeFilter").addEventListener('input', filterCars);
    document.getElementById("batteryFilter").addEventListener('input', filterCars);

    // Відображаємо всі автомобілі при завантаженні сторінки
    window.onload = function() {
        displayCars(cars);
    };

    // Tema alternativo
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