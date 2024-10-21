const mongoose = require('mongoose');

const FilmeSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    diretor: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Filme', FilmeSchema);