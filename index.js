const express = require('express');
const connectDB = require('./db');
const FilmeController = require('./controllers/FilmeController');

const app = express();
const PORT = 8080;

connectDB();
app.use(express.json());

// Rotas
app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Produtos (Filmes)! Use /api/filmes para acessar os produtos.');
});

app.get('/api/filmes', FilmeController.getFilmes);

app.post('/api/filmes', FilmeController.addFilme);

app.delete('/api/filmes/:id', FilmeController.deleteFilme);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
