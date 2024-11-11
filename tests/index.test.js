const request = require('supertest');
const express = require('express');

const app = require('../index');


describe('Testes da API de Produtos (Filmes)', () => {
    it('GET / - Deve retornar mensagem de boas-vindas', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Bem-vindo à API de Produtos (Filmes)! Use /api/filmes para acessar os produtos.');
    });

    it('GET /api/filmes - Deve retornar uma lista de filmes', async () => {
        const res = await request(app).get('/api/filmes');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('POST /api/cadastrar - Deve cadastrar um novo filme', async () => {
        const newFilm = { id: 1, title: 'Novo Filme' };
        const res = await request(app).post('/api/cadastrar').send(newFilm);
        expect(res.statusCode).toBe(201);
        expect(res.body).toMatchObject(newFilm);
    });
});
