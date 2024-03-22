// index.js ou server.js no seu diretório backend
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || 'root',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'crud_db',
});

db.connect(err => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

// Endpoint para criar um novo registro
app.post('/alunos', (req, res) => {
  const { nome, idade, serie } = req.body;
  const query = `INSERT INTO alunos (nome, idade, serie) VALUES (?, ?, ?)`;

  db.execute(query, [nome, idade, serie], (err, result) => {
    if (err) {
      res.status(500).send('Erro ao inserir no banco de dados');
    } else {
      res.status(201).json({ message: 'Aluno cadastrado com sucesso' });

    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
