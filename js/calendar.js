const calendarDays = document.getElementById("calendar-days");
const calendarTitle = document.getElementById("calendar-title");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Função para gerar o calendário
function generateCalendar(month, year) {
    // Configurações iniciais do calendário
    calendarDays.innerHTML = ""; // Limpa os dias anteriores
    calendarTitle.innerText = `Calendário de ${monthNames[month]} de ${year}`;

    // Calcula o primeiro dia do mês e o número de dias
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Preenche os dias vazios até o primeiro dia
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        emptyDiv.classList.add("empty-day");
        calendarDays.appendChild(emptyDiv);
    }

    // Adiciona os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.classList.add("day");
        dayButton.textContent = day;
        dayButton.onclick = () => toggleDayStatus(dayButton);
        calendarDays.appendChild(dayButton);
    }
}

// Alterna entre bom, ruim e neutro
function toggleWeeklyStatus(button) {
    if (button.classList.contains('good')) {
        button.classList.remove('good');
        button.classList.add('bad');
    } else if (button.classList.contains('bad')) {
        button.classList.remove('bad');
    } else {
        button.classList.add('good');
    }
}

function toggleDayStatus(button) {
    if (button.classList.contains('good')) {
        button.classList.remove('good');
        button.classList.add('bad');
    } else if (button.classList.contains('bad')) {
        button.classList.remove('bad');
    } else {
        button.classList.add('good');
    }
}

// Função para mudar o mês e ajustar o ano automaticamente
function changeMonth(direction) {
    currentMonth += direction;
    if (currentMonth < 0) {
        currentMonth = 11; // Define para dezembro
        currentYear--;     // Reduz o ano
    } else if (currentMonth > 11) {
        currentMonth = 0;  // Define para janeiro
        currentYear++;     // Aumenta o ano
    }
    generateCalendar(currentMonth, currentYear);
}

// Lista dos nomes dos meses
const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Gera o calendário inicial
generateCalendar(currentMonth, currentYear);
