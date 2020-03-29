const express =  require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes =  require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 * Rota / Recurso
 */

/**
 *Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma infromação no back-end
 * DELETE: Deletar uma informação no back-end
 *
 */


/**
 *Tipos de parâmetros
 *
 * Query Params: Parêmetros nomeados na rota apos "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizados para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */


module.exports = app;