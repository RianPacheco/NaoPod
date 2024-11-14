// Função para alternar o menu de notificações
document.getElementById('notifications-link').addEventListener('click', function() {
    const notificationsDropdown = document.getElementById('notifications');
    notificationsDropdown.style.display = notificationsDropdown.style.display === 'block' ? 'none' : 'block';
});


// Função para mostrar ou esconder as seções com transição
function showSection(sectionNumber) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção correspondente
    const selectedSection = document.getElementById(`section-${sectionNumber}`);
    selectedSection.classList.add('active');

    // Adiciona a classe 'selected' ao botão clicado
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => {
        button.classList.remove('selected'); // Remove a classe 'selected' de todos os botões
    });

    // Adiciona a classe 'selected' ao botão clicado
    const clickedButton = document.querySelector(`.buttons button:nth-child(${sectionNumber})`);
    clickedButton.classList.add('selected');
}
