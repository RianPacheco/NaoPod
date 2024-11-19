// js/account.js

function mostrarSecao(secao) {
    const secoes = document.querySelectorAll('.section');
    secoes.forEach(s => s.classList.remove('active'));
    document.getElementById(secao).classList.add('active');
}

function logout() {
    alert('Você saiu da conta.');
    window.location.href = 'index.html'; // Ajuste o caminho conforme necessário
}

// js/account.js

// Carregar informações do usuário ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (usuarioLogado) {
        document.getElementById('perfil-nome-text').textContent = usuarioLogado.usuario;
        document.getElementById('perfil-email-text').textContent = usuarioLogado.email;
    } else {
        alert('Nenhum usuário logado. Redirecionando para a página de login.');
        window.location.href = '../login/index.html';
    }
});

// Função para alternar entre texto e input para edição
function editarCampo(campo) {
    const input = document.getElementById(`perfil-${campo}-input`);
    const texto = document.getElementById(`perfil-${campo}-text`);
    const botaoEditar = document.getElementById(`editar-${campo}`);
    const botaoSalvar = document.getElementById(`salvar-${campo}`);

    input.value = texto.textContent; // Preencher input com o valor atual
    input.classList.remove('hidden');
    texto.classList.add('hidden');
    botaoEditar.classList.add('hidden');
    botaoSalvar.classList.remove('hidden');
}

// Função para salvar alterações de um campo específico
function salvarCampo(campo) {
    const input = document.getElementById(`perfil-${campo}-input`);
    const texto = document.getElementById(`perfil-${campo}-text`);
    const botaoEditar = document.getElementById(`editar-${campo}`);
    const botaoSalvar = document.getElementById(`salvar-${campo}`);

    const novoValor = input.value.trim();

    if (!novoValor) {
        alert('O campo não pode estar vazio.');
        return;
    }

    // Atualizar os dados no localStorage
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    usuarioLogado[campo] = novoValor;
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

    // Atualizar exibição
    texto.textContent = novoValor;
    input.classList.add('hidden');
    texto.classList.remove('hidden');
    botaoEditar.classList.remove('hidden');
    botaoSalvar.classList.add('hidden');

    alert(`${campo.charAt(0).toUpperCase() + campo.slice(1)} atualizado com sucesso!`);
}
