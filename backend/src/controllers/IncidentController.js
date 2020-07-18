const connection = require('../database/connection');
const { request } = require('express');



module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();


        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            // quando quer relacionar dados de duas tabelas
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        response.json(incidents);

    },

    async create(request, response) {

        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({

            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });


    },

    async delete(request, response) {

        const { id } = request.params;
        // retorna apenas um unico recurso
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        // .first retorna apenas um resultado

        if (incident.ong_id != ong_id) {

            return response.status(401).json({ error: 'Operation not permitted' });
            // status não autorizado
        }

        await connection('incidents').where('id', id).delete();
        response.status(204).send();
        // status 204 no content - deu sucesso mas nao tem conteúdo para retornar
        // send : enviar sem corpo, vazia

    }
};