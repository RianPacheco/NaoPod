// js/cadastrar.js

function cadastrar() {
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Validação dos campos
    if (!usuario || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Armazenando os dados no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioExistente = usuarios.find(u => u.usuario === usuario);

    if (usuarioExistente) {
        alert('Usuário já cadastrado. Escolha outro nome.');
        return;
    }

    usuarios.push({ usuario, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');
    window.location.href = '../index.html'; // Redireciona para a página de login
}



function entrar() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    // Validação dos campos
    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verificando os dados no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

    if (usuarioEncontrado) {
        // Salvar o usuário logado no localStorage para usar na página user.html
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        
        // Redireciona para a página user.html
        window.location.href = './telas/user.html';
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

// js/account.js ou js/verify.js

// Carregar o nome do usuário no perfil após o login
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
        // Atualiza o nome do usuário na página
        document.getElementById('nickname').textContent = usuarioLogado.usuario;
});
