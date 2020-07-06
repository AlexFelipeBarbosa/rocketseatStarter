const express = require('express');
const mysql = require('mysql');

// Iniciando o App
const app = express();

// Iniciando o DB
const con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'alexbarbosa',
  database: 'rocketseat_starter',
});

con.connect((err) => {
  if (err) {
    console.log('Erro ao conectar no banco de dados!');
    return;
  }
  console.log('Conexão com banco de dados realizada com sucesso!');
});
/*
con.end((err) => {
  if (err) {
    console.log('Erro ao encerrar a conexão com o banco de dados');
    return;
  }
  console.log('Conexão com o banco de dados encerrada com sucesso');
});
*/
// Primeira rota
app.get('/', (req, res) => {
  res.send('Alex Felipe Barbosa');
});

app.listen(3001);
