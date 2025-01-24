document.addEventListener("DOMContentLoaded", function() {
    // Obtendo o formulário de login pelo ID
    const loginForm = document.getElementById("loginForm");

    // Lógica para o formulário de login
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

        // Obtendo os dados inseridos pelo usuário
        const nickname = document.getElementById("nickname").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Obtendo o usuário armazenado no localStorage
        const storedUser = JSON.parse(localStorage.getItem('currentUser'));

        // Verificando se o usuário existe e se o email e senha correspondem
        if (storedUser && storedUser.email === email && storedUser.password === password && storedUser.nickname === nickname) {
            alert(`Login bem-sucedido! Bem-vindo, ${storedUser.email}.`);
            // Redireciona para a página principal
            window.location.href = "../index.html"; 
        } else {
            alert("Email ou senha incorretos!"); // Caso os dados não correspondam
        }
    });

    // Lógica para o botão "Skip"
    const skipButton = document.getElementById("skipBtn");

    skipButton.addEventListener("click", function() {
        // Redireciona para a página principal ou outra página
        window.location.href = "../index.html";
    });
});