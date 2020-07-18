const connection = require('../database/connection');
const crypto = require('crypto');
// gera um texto aleatorio

module.exports = {

    async index(request, response) {

        // tipo get pq quer listar alguma coisa

        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
        // await para aguardar um codigo finalizar  

    },

    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;
        // contem todos os dados digitados na aplicação
        // descrever os itens para pegar cada valor em uma viável separada, desestruturação

        const id = crypto.randomBytes(4).toString('HEX');
        // consegue utilizar um metodo para gerar um texto aleatorio

        // conexão com o banco de dados


        await connection('ongs').insert({
            // aguarda o codigo finalizar para então confinuar

            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
        // retorna apenas o id, como se fosse uma identificação da ong usado para conectar


    }
};