const Filme = require('../model/Filme');

exports.getFilmes = async (req, res) => {
    try {
        const filmes = await Filme.find();
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao obter filmes' });
    }
};


exports.addFilme = async (req, res) => {
    const { nome, ano, diretor } = req.body;
    try {
        const novoFilme = new Produto({ nome, ano, diretor });
        await novoFilme.save();
        res.status(201).json(novoFilme);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar filme' });
    }
};
