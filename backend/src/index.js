const express = require('express'); //importa os modulos do express
const cors = require('cors');
const routes = require('./routes');

const app = express(); //estancia a aplicacap (app)

app.use(cors());
app.use(express.json());
app.use(routes);

//criacao de uma rota get no diretorio rais da app '/'

/**
 * GET metodo de listagem
 * POST criacao de uma registro
 * PUT alteracao de um registro
 * DELETE remocao de um registro
 */

 /**
  * Tipos de paramentros
  * 
  * Query Params = Parametros nomeados enviados na rota apos "?" (filtro e paginacao)
  * Route Params = Parametros utlizados para indentificar  recursos (apos "/")
  * Request Body: Corpo da requisicao usado para criar ou alterar recursos
  */


app.listen(3333); //define uma porta para a app


