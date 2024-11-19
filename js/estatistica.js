// Função para calcular o desempenho
function calculatePerformance(goodCount, badCount) {
    let performance = "";
    const ratio = goodCount / badCount; // Calcula a relação entre verdes e vermelhos

    // Define o desempenho de acordo com as condições
    if (goodCount < badCount) {
        performance = "Desempenho Péssimo";
    } else if (goodCount === badCount) {
        performance = "Desempenho Ruim";
    } else if (ratio >= 1 && ratio < 2) {
        performance = "Desempenho Mediano";
    } else if (ratio >= 2 && ratio < 3) {
        performance = "Desempenho Bom";
    } else if (ratio >= 3) {
        performance = "Desempenho Ótimo";
    }

    return performance;
}

// Função para exibir o desempenho
function displayPerformance(goodCount, badCount) {
    const performance = calculatePerformance(goodCount, badCount);
    const performanceElement = document.getElementById("performance"); // Supondo que você tenha um <p> com id "performance"
    
    // Define o texto do desempenho
    performanceElement.textContent = performance;
    const s2RightElement = document.querySelector(".s2-right");

    // Muda a cor do texto com base no desempenho
    switch (performance) {
        case "Desempenho Péssimo":
            performanceElement.style.color = "red";  // Vermelho para péssimo
            s2RightElement.style.borderColor = "red";
            break;
        case "Desempenho Ruim":
            performanceElement.style.color = "#ff5100";  // Laranja para ruim
            s2RightElement.style.borderColor = "#ff5100";
            break;
        case "Desempenho Mediano":
            performanceElement.style.color = "#ffc400";  // Amarelo para mediano
            s2RightElement.style.borderColor = "#ffc400";
            break;
        case "Desempenho Bom":
            performanceElement.style.color = "green";  // Verde para bom
            s2RightElement.style.borderColor = "green";
            break;
        case "Desempenho Ótimo":
            performanceElement.style.color = "#0059e6";  // Azul para ótimo
            s2RightElement.style.borderColor = "#0059e6";
            break;
        default:
            performanceElement.style.color = "black";  // Cor padrão, caso não caia em nenhum caso
            s2RightElement.style.borderColor = "black";
    }
}

// Exemplo de como chamar a função com valores para goodCount e badCount
// Substitua esses valores pelos contadores reais dos botões
const goodCount = 5; // Número de verdes
const badCount = 2;  // Número de vermelhos

displayPerformance(goodCount, badCount);
