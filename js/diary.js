let editIndex = null;

    // Função para carregar anotações do armazenamento local
    function loadEntries() {
        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        const entryList = document.getElementById('entryList');
        entryList.innerHTML = '';

        entries.forEach((entry, index) => {
            const entryDiv = document.createElement('div');
            entryDiv.classList.add('entry');
            entryDiv.innerHTML = `
                <p>${entry}</p>
                <button onclick="editEntry(${index})">Editar</button>
                <button onclick="deleteEntry(${index})">Excluir</button>
            `;
            entryList.appendChild(entryDiv);
        });
    }

    // Função para salvar ou atualizar uma anotação
    document.getElementById('saveBtn').addEventListener('click', function() {
        const input = document.getElementById('diaryInput').value;
        if (input.trim()) {
            const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
            
            if (editIndex === null) {
                // Salva uma nova anotação no início
                entries.unshift(input);
            } else {
                // Atualiza a anotação existente
                entries[editIndex] = input;
                editIndex = null; // Resetar após edição
            }
            
            localStorage.setItem('diaryEntries', JSON.stringify(entries));
            document.getElementById('diaryInput').value = ''; // Limpar campo de texto
            loadEntries(); // Atualizar lista de anotações
        } else {
            alert('Por favor, escreva algo antes de salvar.');
        }
    });

    // Função para editar uma anotação
    function editEntry(index) {
        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        document.getElementById('diaryInput').value = entries[index]; // Preenche o campo de texto com a anotação selecionada
        editIndex = index; // Marca o índice da anotação que está sendo editada
    }

    // Função para excluir uma anotação
    function deleteEntry(index) {
        const entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
        entries.splice(index, 1);
        localStorage.setItem('diaryEntries', JSON.stringify(entries));
        loadEntries(); // Atualizar lista de anotações
    }

    // Carregar anotações ao carregar a página
    window.onload = loadEntries;