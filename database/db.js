const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/gestao', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Banco de dados conectado!');
    } catch (error) {
        console.error('Erro ao conectar no banco de dados', error);
        process.exit(1); 
    }
};


module.exports = connectDB;