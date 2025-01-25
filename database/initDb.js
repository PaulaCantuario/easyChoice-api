const sqlite3 = require('sqlite3').verbose(); // Importa o sqlite3
const db = new sqlite3.Database('database/database.sqlite', (err) => { //Realiza a conexão
  if (err) {
    console.error('Erro ao conectar ao banco de dados', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');

    // Executa a criação das tabelas após a conexão
    //Inserido dentro do callback para a ordem do log ficar de acordo com os eventos executados
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS Usuario (
          id TEXT DEFAULT (lower(hex(randomblob(16)))) PRIMARY KEY,
          nome TEXT NOT NULL CHECK(length(nome) <= 255),
          email TEXT NOT NULL UNIQUE CHECK(length(email) <= 255),
          senha TEXT NOT NULL CHECK(length(senha) <= 255)
        );
      `);
      console.log("Tabela 'Usuario' criada com sucesso.");
    });

    db.close(); // Fecha o banco de dados após a execução
  }
});
