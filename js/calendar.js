const calendarDays = document.getElementById("calendar-days");
        const calendarTitle = document.getElementById("calendar-title");

        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();
        let currentWeekStart = new Date(currentYear, currentMonth, 17); // Início da semana no dia 17

        // Variáveis globais para armazenar os totais acumulados
        let totalGoodCount = 0;
        let totalBadCount = 0;

        // Função para gerar o calendário
        function generateCalendar(month, year) {
            calendarDays.innerHTML = "";
            calendarTitle.innerText = `Calendário de ${monthNames[month]} de ${year}`;

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDay; i++) {
                const emptyDiv = document.createElement("div");
                emptyDiv.classList.add("empty-day");
                calendarDays.appendChild(emptyDiv);
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dayButton = document.createElement("button");
                dayButton.classList.add("day");
                dayButton.textContent = day;

                const dayDate = new Date(year, month, day);
                if (isInSameWeek(dayDate, currentWeekStart)) {
                    dayButton.onclick = () => toggleDayStatus(dayButton, dayDate);
                    const status = getDayStatusFromWeekButtons(day);
                    if (status) {
                        dayButton.classList.add(status);
                    }
                } else {
                    dayButton.disabled = true;
                }

                calendarDays.appendChild(dayButton);
            }
        }

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

        function updateWeekButton(dayDate, status) {
            const dayOfMonth = dayDate.getDate();
            const weekButtons = document.querySelectorAll(".week-day-btn");

            weekButtons.forEach(button => {
                const dayButton = button.dataset.week;
                if (parseInt(dayButton) === (dayOfMonth - 17 + 1)) {
                    button.classList.remove("good", "bad", "neutral");
                    button.classList.add(status);
                }
            });
        }

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

        function isInSameWeek(date, startOfWeek) {
            const startDate = new Date(startOfWeek);
            const endDate = new Date(startOfWeek);
            endDate.setDate(startDate.getDate() + 6);
            return date >= startDate && date <= endDate;
        }

        function finalizeWeek() {
            const weekButtons = document.querySelectorAll(".week-day-btn");
        
            // Verifica se todos os botões foram preenchidos (com 'good' ou 'bad')
            const allFilled = Array.from(weekButtons).every(button =>
                button.classList.contains("good") || button.classList.contains("bad")
            );
        
            if (!allFilled) {
                alert("Preencha todos os dias da semana como 'Bom' ou 'Ruim' antes de finalizar!");
                return;
            }
        
            let goodCount = 0;
            let badCount = 0;
        
            // Conta quantos botões estão como 'good' e 'bad'
            weekButtons.forEach(button => {
                if (button.classList.contains("good")) goodCount++;
                if (button.classList.contains("bad")) badCount++;
            });
        
            // Acumula os resultados totais
            totalGoodCount += goodCount;
            totalBadCount += badCount;
        
            // Atualiza os resultados e a performance
            updateResults(totalGoodCount, totalBadCount);
            displayPerformance(totalGoodCount, totalBadCount);
        
            // Reseta os botões da semana para 'neutral'
            weekButtons.forEach(button => {
                button.classList.remove("good", "bad", "neutral");
                button.classList.add("neutral");
            });
        
            // Atualiza o calendário anual sem alterar a semana
            generateCalendar(currentMonth, currentYear);
        }

        function updateResults(totalGood, totalBad) {
            const greenResults = document.getElementById("green-results");
            const redResults = document.getElementById("red-results");

            greenResults.textContent = `${totalGood}`;
            redResults.textContent = `${totalBad}`;
        }

        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];

        generateCalendar(currentMonth, currentYear);

        document.getElementById("finalize-week-btn").addEventListener("click", finalizeWeek);

        // Eventos para os botões da semana
const weekDayButtons = document.querySelectorAll(".week-day-btn");
weekDayButtons.forEach(button => {
    button.addEventListener("click", () => toggleWeekDayStatus(button));
});

// Alterna o estado dos botões da semana
function toggleWeekDayStatus(button) {
    if (button.classList.contains("good")) {
        button.classList.remove("good");
        button.classList.add("bad");
        updateCalendarDays(button.dataset.week, 'bad');
    } else if (button.classList.contains("bad")) {
        button.classList.remove("bad");
        button.classList.add("neutral");
        updateCalendarDays(button.dataset.week, 'neutral');
    } else {
        button.classList.remove("neutral");
        button.classList.add("good");
        updateCalendarDays(button.dataset.week, 'good');
    }
}

// Atualiza os dias do calendário baseados nos botões da semana
function updateCalendarDays(weekDay, status) {
    const dayOfMonth = 17 + (parseInt(weekDay) - 1); // Calcula o dia no mês (dias de 17 a 23)
    const dayButtons = document.querySelectorAll(".calendar-days button");

    dayButtons.forEach(button => {
        if (parseInt(button.textContent) === dayOfMonth) {
            button.classList.remove("good", "bad", "neutral");
            button.classList.add(status);
        }
    });
}

// Função para gerar botões da semana (garante que os botões sejam clicáveis)
function generateWeekButtons() {
    const weekButtonsContainer = document.getElementById("week-buttons");
    weekButtonsContainer.innerHTML = ""; // Limpa os botões existentes

    for (let i = 0; i < 7; i++) {
        const weekButton = document.createElement("button");
        weekButton.classList.add("week-day-btn", "neutral");
        weekButton.dataset.week = i + 1; // Define o índice do botão
        weekButton.innerText = `Dia ${i + 1}`;
        weekButton.addEventListener("click", () => toggleWeekDayStatus(weekButton));
        weekButtonsContainer.appendChild(weekButton);
    }
}

// Chama a função para gerar os botões da semana ao carregar
generateWeekButtons();
