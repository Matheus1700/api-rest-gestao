const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Certifique-se de exportar o app em index.js
const Filme = require('../model/Filme');

describe('Testes da API de Filmes', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/teste', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.db.dropDatabase(); // Limpa o banco após os testes
        await mongoose.connection.close();
    });

    it('listar todos os filmes (GET /api/filmes)', async () => {
        const res = await request(app).get('/api/filmes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('adicionar um novo filme (POST /api/filmes)', async () => {
        const novoFilme = { nome: 'Matrix', ano: 1999, diretor: 'Lana Wachowski' };
        const res = await request(app).post('/api/filmes').send(novoFilme);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('_id');
        expect(res.body.nome).toBe(novoFilme.nome);
    });

    it('remover um filme existente (DELETE /api/filmes/:id)', async () => {
        const filme = new Filme({ nome: 'Filme Teste', ano: 2022, diretor: 'Diretor Teste' });
        await filme.save();

        const res = await request(app).delete(`/api/filmes/${filme._id}`);
        expect(res.statusCode).toBe(204);
    });

    it('retornar 404 ao tentar remover um filme inexistente (DELETE /api/filmes/:id)', async () => {
        const res = await request(app).delete('/api/filmes/638f1b0a2b1a9c001b9d77e1');
        expect(res.statusCode).toBe(404);
        expect(res.body.message).toBe('Filme não encontrado');
    });
});
