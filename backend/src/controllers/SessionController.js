const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        // nao retorna um array, retorna apenas um unico resultado

        if (!ong) {
            // se esta ong não existir

            return response.status(400).json({ error: 'No ONG found with this ID' });
            // status: alguma coisa deu errado
        }

        return response.json(ong);




    }
}