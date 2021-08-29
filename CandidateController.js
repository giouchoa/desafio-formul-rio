const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { email, genero, nome, cep, cargo, data, estadoCivil, endereco, bairro, cidade, estado, celular, rg, cpf } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.nome = nome;
        newCandidate.genero = genero;
        newCandidate.cep = cep;
        newCandidate.cargo = cargo;
        newCandidate.data = data;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.celular = celular;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }

            return res.status(200).send(savedCandidate);
        });
    },



};