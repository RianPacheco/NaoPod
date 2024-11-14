// Função para mostrar ou esconder notificações
function toggleNotifications() {
    const notifications = document.getElementById("notifications");
    notifications.style.display = (notifications.style.display === "block") ? "none" : "block";
}

    // Função para mudar o fundo
    function changeBackground(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.querySelector('.background-container').style.backgroundImage = `url(${e.target.result})`;
            }
            reader.readAsDataURL(file);
        }
    }

// Função para alterar a foto de perfil
function changeProfilePicture(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            document.getElementById('profile-picture').src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

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
}
