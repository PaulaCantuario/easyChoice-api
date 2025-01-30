const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/database.sqlite");

// Função para buscar todos os usuários
function obterTodos() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM Usuario", [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

// Função para buscar usuário único por id
function obterUnico() {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM Usuario where id = ${id}`, [], (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

// Função para criar um novo usuário
function criaUsuario(name, email) {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO Usuario (nome, email, senha) VALUES (?, ?, ?)",
      [name, email, senha],
      function (err) {
        if (err) reject(err);
        resolve(this.lastID); // ID do usuário recém-criado
      }
    );
  });
}

module.exports = { obterTodos, obterUnico, criaUsuario };
