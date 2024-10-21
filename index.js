const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Produtos (Filmes)! Use /api/filmes para acessar os produtos.');
});

app.get('/api/filmes', (req, res) => {
    res.json(produtos);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
