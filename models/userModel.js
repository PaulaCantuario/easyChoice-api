const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.sqlite");

// Função para buscar todos os usuários
function buscaTodosUsuarios() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Usuario", [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

// Função para criar um novo usuário
function criaUsuario(name, email) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO Usuario (name, email) VALUES (?, ?)",
      [name, email],
      function (err) {
        if (err) reject(err);
        resolve(this.lastID); // ID do usuário recém-criado
      }
    );
  });
}

module.exports = { buscaTodosUsuarios, criaUsuario };
