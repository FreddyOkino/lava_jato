const express = require("express");
const route = express.Router();
const enderecoController = require("../controllers/enderecoController");

/**
 * @swagger
 * /endereco:
 *   post:
 *     summary: Cria um novo endereço
 *     tags:
 *       - endereço
 *     description: Cria um endereço associado a um cliente.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Residencial"
 *               logradouro:
 *                 type: string
 *                 example: "Rua das Flores"
 *               numero:
 *                 type: string
 *                 example: "123"
 *               complemento:
 *                 type: string
 *                 example: "Apto 101"
 *               bairro:
 *                 type: string
 *                 example: "Centro"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               cep:
 *                 type: string
 *                 example: "01001-000"
 *               clienteId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tipo:
 *                   type: string
 *                   example: "Residencial"
 *                 logradouro:
 *                   type: string
 *                   example: "Rua das Flores"
 *                 numero:
 *                   type: string
 *                   example: "123"
 *                 complemento:
 *                   type: string
 *                   example: "Apto 101"
 *                 bairro:
 *                   type: string
 *                   example: "Centro"
 *                 cidade:
 *                   type: string
 *                   example: "São Paulo"
 *                 estado:
 *                   type: string
 *                   example: "SP"
 *                 cep:
 *                   type: string
 *                   example: "01001-000"
 *                 clienteId:
 *                   type: integer
 *                   example: 1
 */
route.post("/", enderecoController.createEndereco);

/**
 * @swagger
 * /endereco:
 *   get:
 *     summary: Retorna a lista de todos os enderecos
 *     tags:
 *       - endereço
 *     responses:
 *        200:
 *          description: Lista de endereços
 */
route.get("/", enderecoController.buscarEnderecos);

/**
 * @swagger
 * /endereco/{id}:
 *   get:
 *     summary: Busca um endereço pelo ID
 *     tags:
 *       - endereço
 *     description: Retorna os detalhes de um endereço.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: id do endereço a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Endereço encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 tipo:
 *                   type: string
 *                   example: "Residencial"
 *                 logradouro:
 *                   type: string
 *                   example: "Rua das Flores"
 *                 numero:
 *                   type: string
 *                   example: "123"
 *                 complemento:
 *                   type: string
 *                   example: "Apto 101"
 *                 bairro:
 *                   type: string
 *                   example: "Centro"
 *                 cidade:
 *                   type: string
 *                   example: "São Paulo"
 *                 estado:
 *                   type: string
 *                   example: "SP"
 *                 cep:
 *                   type: string
 *                   example: "01001-000"
 *                 clienteId:
 *                   type: integer
 *                   example: 1
 *       404:
 *         description: Carro não encontrado
 */
route.get("/:id", enderecoController.buscarEnderecoPorId);
/**
 * @swagger
 * /endereco/{id}:
 *   delete:
 *     summary: Deleta um endereco com ID
 *     tags:
 *       - endereço
 *     description: Deleta um endereco do banco de dados e retorna o endereco deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do endereco a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carro deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 tipo:
 *                   type: string
 *                 logradouro:
 *                   type: string
 *                 numero:
 *                   type: string
 *                 complemento:
 *                   type: string
 *                 bairro:
 *                   type: string
 *                 cidade:
 *                   type: string
 *                 estado:
 *                   type: string
 *                 cep:
 *                   type: string
 *       400:
 *         description: Erro ao tentar deletar o endereco
 *       404:
 *         description: Endereco não encontrado
 */
route.delete("/:id", enderecoController.deleteCarro);
/**
 * @swagger
 * /endereco/{id}:
 *   put:
 *     summary: Atualiza um endereço existente
 *     tags:
 *       - endereço
 *     description: Atualiza os detalhes de um endereço específico com base no ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do endereço a ser atualizado.
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *                 example: "Comercial"
 *               logradouro:
 *                 type: string
 *                 example: "Avenida Paulista"
 *               numero:
 *                 type: string
 *                 example: "1000"
 *               complemento:
 *                 type: string
 *                 example: "Sala 202"
 *               bairro:
 *                 type: string
 *                 example: "Bela Vista"
 *               cidade:
 *                 type: string
 *                 example: "São Paulo"
 *               estado:
 *                 type: string
 *                 example: "SP"
 *               cep:
 *                 type: string
 *                 example: "01310-100"
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 tipo:
 *                   type: string
 *                   example: "Comercial"
 *                 logradouro:
 *                   type: string
 *                   example: "Avenida Paulista"
 *                 numero:
 *                   type: string
 *                   example: "1000"
 *                 complemento:
 *                   type: string
 *                   example: "Sala 202"
 *                 bairro:
 *                   type: string
 *                   example: "Bela Vista"
 *                 cidade:
 *                   type: string
 *                   example: "São Paulo"
 *                 estado:
 *                   type: string
 *                   example: "SP"
 *                 cep:
 *                   type: string
 *                   example: "01310-100"
 *       404:
 *         description: Endereço não encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Endereço não encontrado"
 */
route.put("/:id", enderecoController.updateEndereco);


module.exports = route;
