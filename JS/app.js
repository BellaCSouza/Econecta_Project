const express = require('express');
const actors = require('./routes/actors')
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3302;

// Configuração do banco de dados
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: null,
  database: 'EconectaSQL'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rotas CRUD

// Rota para obter todos os usuários
app.get('/usuarios', (req, res) => {
  console.log('get /usuarios')
  connection.query('SELECT * FROM usuario', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Rota para obter um usuário por ID
app.get('/usuarios/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  connection.query('SELECT * FROM usuario WHERE codigo = ?', [codigo], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

// Rota para criar um novo usuário
app.post('/usuarios', (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;
  connection.query('INSERT INTO usuario (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?)',
    [nome, sobrenome, email, senha],
    (err, result) => {
      if (err) throw err;
      res.json({ mensagem: 'Usuário criado com sucesso', codigo: result.insertId });
    });
});

// Rota para atualizar um usuário por ID
app.put('/usuarios/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  const { nome, sobrenome, email, senha } = req.body;
  connection.query('UPDATE usuario SET nome = ?, sobrenome = ?, email = ?, senha = ? WHERE codigo = ?',
    [nome, sobrenome, email, senha, codigo],
    (err) => {
      if (err) throw err;
      res.json({ mensagem: 'Usuário atualizado com sucesso' });
    });
});

// Rota para deletar um usuário por ID
app.delete('/usuarios/:codigo', (req, res) => {
  const codigo = req.params.codigo;
  connection.query('DELETE FROM usuario WHERE codigo = ?', [codigo], (err) => {
    if (err) throw err;
    res.json({ mensagem: 'Usuário deletado com sucesso' });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});











document.addEventListener('DOMContentLoaded', function() {
  const formUsuario = document.getElementById('formUsuario');
  formUsuario.onsubmit = function(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      createUser(nome, email);
  };
});

function createUser(nome, email) {
  // Aqui você chamaria uma função que faz uma requisição ao servidor para adicionar o usuário
  console.log(`Adicionando usuário: ${nome}, ${email}`);
}

// Você também adicionaria funções para ler, atualizar e deletar usuários
