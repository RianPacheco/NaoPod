const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../bd/naopod.bd');

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT , usuario_cad TEXT, email_cad TEXT, senha_cad TEXT, confsenha_cad TEXT)");
    const stmt = db.prepare("INSERT INTO users(usuario_cad, email_cad, senha_cad, confsenha_cad) VALUES (?, ?, ?, ?)");
    stmt.run('rafael', 'rafael.2023120', 'pacheco123', 'pacheco123');
    stmt.finalize();
});

db.close();

module.exports = bd;
