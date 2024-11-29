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
        const novoFilme = new Filme({ nome, ano, diretor });
        await novoFilme.save();
        res.status(201).json(novoFilme);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar filme' });
    }
};

exports.deleteFilme = async (req, res) => {
    const { id } = req.params;
    try {
        const filme = await Filme.findById(id);
        if (!filme) {
            return res.status(404).json({ message: 'Filme não encontrado' });
        }
        await filme.deleteOne();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Erro ao remover filme' });
    }
};
