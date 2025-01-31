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
function obterUnico(id) {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM Usuario WHERE id = '${id}'`, (err, row) => {
      if (err) reject(err);
      resolve(row);
    });
  });
}

// Função para criar um novo usuário
function criaUsuario(nome, email, senha) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}')`,
      function (err) {
        if (err) reject(err);
        resolve(this.lastID);
      }
    );
  });
}

module.exports = { obterTodos, obterUnico, criaUsuario };
