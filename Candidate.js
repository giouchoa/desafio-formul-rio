const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    genero: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    cargo:{ type: String, unique: false, required: true },
    data: { type: Date, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    endereco:{ type: String, unique: false, required: true },
    bairro:{ type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: true },
    celular: { type: Number, unique: false, required: true },
    rg: { type: Number, unique: false, required: true },
    cpf:{ type: Number, unique: false, required: true },

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);