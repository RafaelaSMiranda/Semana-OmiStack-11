const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

// receber a varável dentro do arquivo
// ./ pq quer referenciar um arquivo

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

app.listen(3333);
// porta para acessar a pagina

// converter o json em objeto do JS

// variável que amazena a aplicação

// quando cria uma rota, é preciso informar o caminho desta rota
// a rota é o conjunto completo, depois da barra são os recursos (associado a uma tabela no banco)

// métodos http 
// get: buscar/listar uma informação do backend, retornar dados, listagem
// post: sempre que quiser criar uma informação no backend, ex. criar um novo usuário
// put: alterar uma informação no backend
// delete: excluir uma informação no backend

// tipos de parametros:
// query: parâmetros nomeado enviados dentro da url após o simbolo de ? e geralmente servem para filtros, paginação, & usado para usar mais de um (listar os usuários -> users?name="rafa")
// route: parametros utilizados para identificar recursos
// request body: corpo da requisição: criar ou alterar recursos


// bancos de dados:
// SQL: MySQL, SQLive, PostgreeSQL
// NoSQL: MongoDB, CouchDB - estrutura da tabela muito livre e pouco estruturado


// SQL: mais utilizado atualmente no mercado com maior controle da estrutura do banco

// driver: select * from users
// query builder: table ('users').select(*).where()