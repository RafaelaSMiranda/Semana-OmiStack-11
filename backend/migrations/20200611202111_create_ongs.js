exports.up = function(knex) {
    // sempre é responsável pela criação da tabela

    return knex.schema.createTable('ongs', function(table) {

        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();



    });
};

exports.down = function(knex) {
    // voltar atrás da criação de uma tabela, deu algum problema e precisa desfazer (apagar)

    knex.schema.dropTable('ongs');
};