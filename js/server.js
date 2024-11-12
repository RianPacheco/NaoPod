const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const server = express();
const bd = require('../bd/naopod.bd');

// Middleware para fazer parse de dados de formulários
server.use(bodyParser.urlencoded({ extended: false }));

// Rota para exibir a tela de login
server.get('/index.html', (req, res) => {
    res.send(`
    <form action="" method="post">
            <label for="usuario">USUÁRIO:</label>
            <input type="text" id="usuario">
            <label for="senha">SENHA:</label>
            <input type="senha" id="senha">
            <button onclick="entrar()">Entrar</button>
    </form>
  `);
});

// Rota para processar o login
server.post('/index.html', (req, res) => {
    const { usuario, senha } = req.body;

    // Consultar o banco de dados para verificar as credenciais
    db.get("SELECT * FROM users WHERE usuario_cad = ? AND senha_cad = ?", [usuario, senha], (err, row) => {
        if (err) {
            return res.status(500).send('Erro ao consultar o banco de dados');
        }

        if (row) {
            // Se as credenciais forem válidas, redireciona para a página principal
            res.send(`<h1>Bem-vindo, ${row.usuario}!</h1>`);
        } else {
            // Caso contrário, exibe mensagem de erro e a tela de login novamente
            res.send(`
        <p>Credenciais inválidas. Tente novamente.</p>
        <a href="/login">Voltar para o login</a>
      `);
        }
    });
});

// Iniciar o servidor
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
}); 
