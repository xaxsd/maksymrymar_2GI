document.addEventListener('DOMContentLoaded', function() {
    // Obtém o formulário de registro pelo ID
    const registerForm = document.getElementById('registerForm');

    // Lógica para o envio do formulário de registro
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o recarregamento da página ao submeter o formulário

        // Obtém os dados inseridos no formulário
        const nickname = document.getElementById('nickname').value;  
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Verifica se os campos de email e senha não estão vazios
        if (email && password && nickname) {
            // Cria um objeto 'user' com os dados inseridos
            const user = {
                email: email,
                name: nickname,
                password: password,
            };

            // Armazena o objeto do usuário no localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redireciona para a página de login após o registro
            window.location.href = 'login.html';
        } else {
            alert('Por favor, preencha todos os campos!'); // Exibe um alerta se algum campo estiver vazio
        }
    });
});