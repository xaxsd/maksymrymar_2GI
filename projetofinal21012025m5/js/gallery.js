// Обробник події для DOMContentLoaded - запуск коду, коли весь HTML документ завантажений
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle'); // Кнопка перемикання теми
    const body = document.body; // Доступ до тіла сторінки

    // Можливі теми
    const themes = ['light', 'dark', 'yellow', 'green', 'purple'];

    // Отримуємо поточну тему з localStorage або за замовчуванням 'light'
    let currentTheme = localStorage.getItem('theme') || 'light'; 

    // Застосовуємо поточну тему при завантаженні сторінки
    body.classList.add(`${currentTheme}-theme`); // Додаємо клас відповідної теми
    themeToggle.textContent = `${capitalize(currentTheme)} Theme`; // Оновлюємо текст кнопки перемикання

    // Функція для перемикання теми
    themeToggle.addEventListener('click', () => {
        let nextTheme = getNextTheme(currentTheme); // Отримуємо наступну тему
        body.classList.remove(`${currentTheme}-theme`); // Видаляємо старий клас
        body.classList.add(`${nextTheme}-theme`); // Додаємо новий клас
        currentTheme = nextTheme; // Оновлюємо поточну тему

        // Оновлюємо текст кнопки
        themeToggle.textContent = `${capitalize(nextTheme)} Theme`;

        // Зберігаємо вибір теми в localStorage
        localStorage.setItem('theme', currentTheme);
    });

    // Функція для отримання наступної теми з масиву
    function getNextTheme(current) {
        let currentIndex = themes.indexOf(current); // Знаходимо індекс поточної теми
        let nextIndex = (currentIndex + 1) % themes.length; // Отримуємо індекс наступної теми
        return themes[nextIndex]; // Повертаємо наступну тему
    }

    // Функція для капіталізації першої літери рядка
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1); // Перетворюємо першу літеру на велику
    }
});

// Завантаження та збереження налаштувань користувача
document.addEventListener('DOMContentLoaded', () => {
    // Отримуємо елементи форми
    const usernameInput = document.getElementById('username');
    const languageSelect = document.getElementById('language');
    const themeSelect = document.getElementById('theme');
    const emailNotificationsCheckbox = document.getElementById('email-notifications');
    const twoFactorCheckbox = document.getElementById('two-factor-auth');
    const saveButton = document.getElementById('save-settings');

    // Завантаження налаштувань із JSON або localStorage
    fetch('../data.json') // Завантажуємо налаштування користувача з файлу JSON
        .then(response => response.json()) // Перетворюємо відповідь у формат JSON
        .then(data => {
            const settings = data.userSettings; // Отримуємо налаштування з отриманих даних
            // Заповнюємо форму даними користувача
            usernameInput.value = settings.username;
            languageSelect.value = settings.language;
            themeSelect.value = settings.theme;
            emailNotificationsCheckbox.checked = settings.emailNotifications;
            twoFactorCheckbox.checked = settings.twoFactorAuth;
        })
        .catch(error => console.error('Error loading settings:', error)); // Виводимо помилку в консоль, якщо завантаження не вдалось

    // Збереження налаштувань при натисканні кнопки
    saveButton.addEventListener('click', () => {
        const updatedSettings = {
            username: usernameInput.value,
            language: languageSelect.value,
            theme: themeSelect.value,
            emailNotifications: emailNotificationsCheckbox.checked,
            twoFactorAuth: twoFactorCheckbox.checked
        };

        // Виводимо змінені налаштування в консоль
        console.log('Saved settings:', updatedSettings);

        // Зберігаємо налаштування в localStorage
        localStorage.setItem('userSettings', JSON.stringify(updatedSettings));

        alert('Settings saved!'); // Сповіщення про збереження налаштувань
    });
});

// Обробка вибору теми через селектор в налаштуваннях
document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme');
    const body = document.body;

    // Збереження та застосування вибраної теми
    themeSelect.addEventListener('change', (e) => {
        const selectedTheme = e.target.value; // Отримуємо обрану тему
        body.className = selectedTheme + '-theme'; // Змінюємо клас body на обрану тему
        localStorage.setItem('theme', selectedTheme); // Зберігаємо обрану тему в localStorage
    });

    // Перевірка та застосування збереженої теми при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme + '-theme'; // Застосовуємо збережену тему
        themeSelect.value = savedTheme; // Встановлюємо вибір у селекторі
    }
});


// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            const src = image.getAttribute("src");
            const alt = image.getAttribute("alt");
            const description = image.getAttribute("data-description") || "No description available.";

            // Створення модального вікна
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${src}" alt="${alt}">
                    <p>${description}</p>
                </div>
            `;
            document.body.appendChild(modal);

            // Закриття модального вікна
            const closeButton = modal.querySelector(".close-button");
            closeButton.addEventListener("click", () => {
                modal.remove();
            });
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

    document.addEventListener('DOMContentLoaded', () => {
        fetch('images.json')  // Load JSON file
            .then(response => response.json())
            .then(data => {
                const galleryContainer = document.getElementById('gallery-container');
                const images = data.images;
                
                // Function to display images
                function displayImages(images) {
                    galleryContainer.innerHTML = ''; // Clear gallery
                    images.forEach(image => {
                        const imgElement = document.createElement('img');
                        imgElement.src = image.src;
                        imgElement.alt = image.alt;
                        imgElement.setAttribute('data-description', image.description);
                        imgElement.setAttribute('data-country', image.country);
                        galleryContainer.appendChild(imgElement);
                    });
                }
                
                // Initial display
                displayImages(images);

                // Search functionality
                document.getElementById('search-btn').addEventListener('click', () => {
                    const searchTerm = document.getElementById('search-input').value.toLowerCase();
                    const filteredImages = images.filter(image => 
                        image.alt.toLowerCase().includes(searchTerm) || 
                        image.country.toLowerCase().includes(searchTerm)
                    );
                    displayImages(filteredImages);
                });
            })
            .catch(error => console.error('Error loading images:', error));
    });

    // Theme toggle functionality
    document.addEventListener('DOMContentLoaded', () => {
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const themes = ['light', 'dark', 'yellow', 'green', 'purple'];

        let currentTheme = localStorage.getItem('theme') || 'light';
        body.classList.add(`${currentTheme}-theme`);
        themeToggle.textContent = `${capitalize(currentTheme)} Theme`;

        themeToggle.addEventListener('click', () => {
            let nextTheme = getNextTheme(currentTheme);
            body.classList.remove(`${currentTheme}-theme`);
            body.classList.add(`${nextTheme}-theme`);
            currentTheme = nextTheme;
            themeToggle.textContent = `${capitalize(nextTheme)} Theme`;
            localStorage.setItem('theme', currentTheme);
        });

        function getNextTheme(current) {
            let currentIndex = themes.indexOf(current);
            let nextIndex = (currentIndex + 1) % themes.length;
            return themes[nextIndex];
        }

        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    });
