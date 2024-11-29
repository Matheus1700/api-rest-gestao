const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo à API de Filmes! Use /api/filmes para acessar os produtos.');
});

app.get('/api/filmes', FilmeController.getFilmes);
app.post('/api/filmes', FilmeController.addFilme);
app.delete('/api/filmes/:id', FilmeController.deleteFilme);


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
