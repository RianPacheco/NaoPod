const calendarDays = document.getElementById("calendar-days");
const calendarTitle = document.getElementById("calendar-title");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let currentWeekStart = new Date(currentYear, currentMonth, 17); // Início da semana no dia 17

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

        const dayDate = new Date(year, month, day);

        // Verifica se o dia pertence à semana atual
        if (isInSameWeek(dayDate, currentWeekStart)) {
            dayButton.onclick = () => toggleDayStatus(dayButton, dayDate);
            // Preserva o status dos botões quando se navega para a próxima semana
            const status = getDayStatusFromWeekButtons(day);
            if (status) {
                dayButton.classList.add(status);
            }
        } else {
            dayButton.disabled = true; // Desabilita os dias fora da semana atual
        }

        calendarDays.appendChild(dayButton);
    }
}

// Alterna entre bom, ruim e neutro
function toggleDayStatus(button, dayDate) {
    if (button.classList.contains('good')) {
        button.classList.remove('good');
        button.classList.add('bad');
        updateWeekButton(dayDate, 'bad');
    } else if (button.classList.contains('bad')) {
        button.classList.remove('bad');
        button.classList.add('neutral');
        updateWeekButton(dayDate, 'neutral');
    } else {
        button.classList.add('good');
        updateWeekButton(dayDate, 'good');
    }
}

// Atualiza o botão da semana correspondente ao dia do mês
function updateWeekButton(dayDate, status) {
    const dayOfMonth = dayDate.getDate();
    const weekButtons = document.querySelectorAll(".week-day-btn");

    weekButtons.forEach(button => {
        const dayButton = button.dataset.week;
        if (parseInt(dayButton) === (dayOfMonth - 17 + 1)) { // Mapeia os dias 17 a 23
            button.classList.remove("good", "bad", "neutral");
            button.classList.add(status);
        }
    });
}

// Função para obter o status do dia a partir dos botões da semana
function getDayStatusFromWeekButtons(day) {
    const weekButtons = document.querySelectorAll(".week-day-btn");
    let status = null;

    weekButtons.forEach(button => {
        const dayButton = button.dataset.week;
        if (parseInt(dayButton) === (day - 17 + 1)) {
            if (button.classList.contains("good")) {
                status = "good";
            } else if (button.classList.contains("bad")) {
                status = "bad";
            } else if (button.classList.contains("neutral")) {
                status = "neutral";
            }
        }
    });

    return status;
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

// Função para verificar se o dia está na mesma semana que o início da semana (domingo, dia 17)
function isInSameWeek(date, startOfWeek) {
    const startDate = new Date(startOfWeek);
    const endDate = new Date(startOfWeek);
    endDate.setDate(startDate.getDate() + 6); // Final da semana (6 dias depois)

    return date >= startDate && date <= endDate;
}

// Função para finalizar a semana (não vai avançar para a próxima semana)
function finalizeWeek() {
    // Reseta os botões da semana para neutro
    const weekButtons = document.querySelectorAll(".week-day-btn");
    weekButtons.forEach(button => {
        button.classList.remove("good", "bad", "neutral");
        button.classList.add("neutral"); // Define como neutro
    });

    // Não altera a data da semana, a semana permanece a mesma

    generateCalendar(currentMonth, currentYear); // Atualiza o calendário anual sem avançar a semana
}

// Gera o calendário inicial
generateCalendar(currentMonth, currentYear);

// Adiciona evento para o botão "Finalizar Semana"
document.getElementById("finalize-week-btn").addEventListener("click", finalizeWeek);

// Eventos para os botões da semana
const weekDayButtons = document.querySelectorAll(".week-day-btn");
weekDayButtons.forEach(button => {
    button.addEventListener("click", () => toggleWeekDayStatus(button));
});

// Alterna entre bom, ruim e neutro para os botões da semana
function toggleWeekDayStatus(button) {
    if (button.classList.contains("good")) {
        button.classList.remove("good");
        button.classList.add("bad");
        updateCalendarDays(button.dataset.week, 'bad');
    } else if (button.classList.contains("bad")) {
        button.classList.remove("bad");
        button.classList.add("neutral");
        updateCalendarDays(button.dataset.week, 'neutral');
    } else if (button.classList.contains("neutral")) {
        button.classList.remove("neutral");
        button.classList.add("good");
        updateCalendarDays(button.dataset.week, 'good');
    } else {
        button.classList.add("good"); // Se não tem nenhuma classe, define como 'good'
        updateCalendarDays(button.dataset.week, 'good');
    }
}

// Atualiza os dias no calendário com base no botão da semana
function updateCalendarDays(weekDay, status) {
    const dayOfMonth = 17 + (parseInt(weekDay) - 1); // Mapeia os dias de 17 a 23
    const dayButtons = document.querySelectorAll(".calendar-days button");

    dayButtons.forEach(button => {
        if (parseInt(button.textContent) === dayOfMonth) {
            button.classList.remove("good", "bad", "neutral");
            button.classList.add(status);
        }
    });
}

