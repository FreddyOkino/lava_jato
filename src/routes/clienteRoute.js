const express = require("express");
const route = express.Router();
const ClienteController = require("../controllers/clienteController");

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: 
 *       - cliente
 *     description: Cria um cliente com nome, telefone, CPF e email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "João da Silva"
 *               telefone:
 *                 type: string
 *                 example: "(67) 99999-8888"
 *               cpf:
 *                 type: string
 *                 example: "123.456.789-10"
 *               email:
 *                 type: string
 *                 example: "joao.silva@email.com"
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   example: "João da Silva"
 *                 telefone:
 *                   type: string
 *                   example: "(67) 99999-8888"
 *                 cpf:
 *                   type: string
 *                   example: "12345678910"
 *                 email:
 *                   type: string
 *                   example: "joao.silva@email.com"
 */
route.post("/", ClienteController.createCliente);

/**
 * @swagger
 * /cliente:
 *   get:
 *     summary: Retorna a lista de todos os Clientes
 *     tags: 
 *       - cliente
 *     responses:
 *        200:
 *          description: Lista de clientes
 */
route.get("/", ClienteController.buscarTodosCliente);
/**
 * @swagger
 * /cliente/{cpf}:
 *   get:
 *     summary: Busca um cliente pelo CPF
 *     tags: 
 *       - cliente
 *     description: Retorna os detalhes de um cliente.
 *     parameters:
 *       - name: cpf
 *         in: path
 *         description: cpf do cliente a ser buscado
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 cpf:
 *                   type: string
 *                 email:
 *                   type: string
 *       404:
 *         description: Cliente não encontrado
 */
route.get("/:cpf", ClienteController.buscarClientePorId);

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Deleta um cliente pelo ID
 *     tags: 
 *       - cliente
 *     description: Deleta um cliente do banco de dados e retorna o cliente deletado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do cliente a ser deletado
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 cpf:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Erro ao tentar deletar o cliente
 *       404:
 *         description: Cliente não encontrado
 */
route.delete("/:id", ClienteController.deleteCliente);

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     tags: 
 *       - cliente
 *     description: Atualiza os dados de um cliente. Envie apenas os campos que deseja atualizar no corpo da requisição.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID do cliente a ser atualizado
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 nome:
 *                   type: string
 *                   exemple: "Joao Carlos"
 *                 telefone:
 *                   type: string
 *                   exemple: "(67) 99900-1846"
 *                 cpf:
 *                   type: string
 *                   exemple: "123.456.789-10"
 *                 email:
 *                   type: string
 *                   exemple: "joao@email.com"
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 nome:
 *                   type: string
 *                 telefone:
 *                   type: string
 *                 cpf:
 *                   type: string
 *                 email:
 *                   type: string
 *       400:
 *         description: Erro na atualização do funcionário
 *       404:
 *         description: Funcionário não encontrado
 */
route.put("/:id", ClienteController.updateCliente);
module.exports = route;
