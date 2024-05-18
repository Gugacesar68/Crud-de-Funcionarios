
/* CRUD
Create - Criar novo registro
Read -  Ler um ou mais registros
Update - Alualizar um ou mais registros
Delete - Deletar um ou mais registros
*/

/*VERBOS REST

GET - Obter dados
POST - Enviar dados (novo cadastro)
PUT - Atualizar dados (substituir objeto completo)
PATCH - Atualizar dados (substituir objeto parcial)
DELETE - Excluir um registro do servidor
OPTIONS - Permitir acesso de domínios diferentes
*/

const express = require("express");
const mongoose = require("mongoose");
const nodemon = require("nodemon");

const app = express();
const MongoDB = 0

/******************************************************/
// Leitor de JSON

app.use(express.urlencoded({extended: true}))

app.use(express.json())

/******************************************************/
// Rotas

app.get("/", (rec, res) => {
    res.json({test_mensage: "Teste de aplicativo sucedido!"});
})

/******************************************************/
// Porta de saída

app.listen(5600)